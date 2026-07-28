import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Building2,
  Mail,
  User,
  Phone,
  MapPin,
  Landmark,
  BriefcaseBusiness,
} from "lucide-react";

const fields = [
  {
    label: "Company Name",
    placeholder: "ABC Technologies Pvt. Ltd.",
    type: "text",
    icon: Building2,
    name: "companyName",
  },
  {
    label: "Workspace Name",
    placeholder: "abc-workspace",
    type: "text",
    icon: BriefcaseBusiness,
    name: "workspaceName",
  },
  {
    label: "Your Name",
    placeholder: "John Doe",
    type: "text",
    icon: User,
    name: "owner",
  },
  {
    label: "Official Email",
    placeholder: "admin@company.com",
    type: "email",
    icon: Mail,
    name: "email",
  },
  {
    label: "Mobile Number",
    placeholder: "+91 9876543210",
    type: "text",
    icon: Phone,
    name: "mobile",
  },
  {
    label: "State",
    placeholder: "Madhya Pradesh",
    type: "text",
    icon: Landmark,
    name: "state",
  },
  {
    label: "City",
    placeholder: "Gwalior",
    type: "text",
    icon: MapPin,
    name: "city",
  },
];

export default function CreateWorkspace({ onCancel, onSubmit }) {
  const [formData, setFormData] = useState({
    companyName: "",
    workspaceName: "",
    owner: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
  });

// Initialized with a live static image URL instead of null
const [logo, setLogo] = useState("https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=500&q=80");
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const CreateWorkspaceHandle = async () => {
  try {
    setLoading(true);

    // The logo state now contains the static URL string
    const payload = {
      ...formData,
      logo
    };

    const response = await fetch("/api/workspaces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Failed to create workspace");
    }

    onSubmit?.(data);
  } catch (error) {
    console.error("Create workspace error:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22 }}
        className="overflow-hidden rounded-xl border border-[#e6ddd1] bg-white shadow-[0_10px_30px_rgba(31,26,19,0.05)]"
      >
        <div className="border-b border-[#ece4d8] bg-linear-to-r from-[#262320] via-[#2d2a26] to-[#211f1b] px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f0b24d]">
            Workspace Setup
          </p>
          <h2 className="mt-1 text-base font-semibold text-white">
            Create Workspace
          </h2>
          <p className="mt-0.5 text-xs text-white/65">
            Add organization details and continue.
          </p>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await CreateWorkspaceHandle();
          }}
        >
          <div className="p-4">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {fields.map((field, index) => {
                const Icon = field.icon;

                return (
                  <motion.div
                    key={field.label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    className={field.label === "City" ? "md:col-span-2" : ""}
                  >
                    <label className="mb-1 block text-[11px] font-medium text-[#6e675f]">
                      {field.label}
                    </label>

                    <div className="group flex h-10 items-center gap-2 rounded-lg border border-[#e7ddd0] bg-[#fcfbf8] px-3 transition focus-within:border-[#efb04a] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#efb04a1a]">
                      <Icon
                        size={15}
                        className="shrink-0 text-[#9c9488] transition group-focus-within:text-[#c58924]"
                      />
                      <input
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="h-full w-full bg-transparent text-sm text-[#2b2823] outline-none placeholder:text-[#a39a8e]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-3">
              <label className="mb-1 block text-[11px] font-medium text-[#6e675f]">
                Company Logo
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-[#e3d7c6] bg-[#fcfaf7] px-3 py-3 transition hover:border-[#efb04a] hover:bg-[#fffaf1]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fff4e3] text-[#c88b22]">
                  <Building2 size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[#2a2722]">
                    {logo ? logo.name : "Upload Logo"}
                  </p>
                  <p className="text-[11px] text-[#81796f]">
                    PNG, JPG or SVG up to 2MB
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#f0b24d] px-3 py-2 text-xs font-medium text-[#2b241a] transition hover:bg-[#e3a43a]">
                  <Upload size={14} />
                  Browse
                </span>

                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setLogo(e.target.files?.[0] || null)}
                />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 border-t border-[#ece4d8] px-4 py-3">
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="h-9 rounded-lg border border-[#ddd4c7] bg-white px-4 text-sm font-medium text-[#5f594f] transition hover:bg-[#f7f3ed] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="h-9 rounded-lg bg-[#f0b24d] px-4 text-sm font-semibold text-[#2a241a] transition hover:bg-[#e5a63c] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}