import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  Users,
  FolderKanban,
  IndianRupee,
  Pencil,
  Eye,
  Trash2,
  LayoutGrid,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import CreateWorkspace from "./CreateWorkspace";

const workspaces = [
  {
    id: 1,
    companyName: "QuickLog Technologies",
    workspaceName: "quicklog-admin",
    owner: "Aman Sharma",
    email: "admin@quicklog.com",
    employees: 42,
    projects: 16,
    revenue: 124000,
    status: "Active",
    createdAt: "12 Jul 2026",
    growth: 12,
    initials: "QL",
    accent: "from-emerald-700 to-emerald-950",
  },
  {
    id: 2,
    companyName: "Educerns Academy",
    workspaceName: "educerns-main",
    owner: "Rohit Verma",
    email: "contact@educerns.com",
    employees: 31,
    projects: 10,
    revenue: 94500,
    status: "Active",
    createdAt: "08 Jul 2026",
    growth: 8,
    initials: "EA",
    accent: "from-sky-700 to-slate-950",
  },
  {
    id: 3,
    companyName: "SkyEdge CRM",
    workspaceName: "skyedge-sales",
    owner: "Neha Patel",
    email: "hello@skyedgecrm.com",
    employees: 24,
    projects: 8,
    revenue: 71200,
    status: "Pending",
    createdAt: "04 Jul 2026",
    growth: 4,
    initials: "SE",
    accent: "from-indigo-700 to-indigo-950",
  },
  {
    id: 4,
    companyName: "NovaBuild Infra",
    workspaceName: "novabuild-team",
    owner: "Karan Yadav",
    email: "ops@novabuild.com",
    employees: 18,
    projects: 5,
    revenue: 52800,
    status: "Inactive",
    createdAt: "28 Jun 2026",
    growth: -6,
    initials: "NB",
    accent: "from-stone-700 to-stone-950",
  },
  {
    id: 5,
    companyName: "BrightPath Services",
    workspaceName: "brightpath-hq",
    owner: "Simran Kaur",
    email: "admin@brightpath.com",
    employees: 27,
    projects: 11,
    revenue: 88900,
    status: "Active",
    createdAt: "21 Jun 2026",
    growth: 9,
    initials: "BP",
    accent: "from-amber-700 to-amber-950",
  },
];

const tabs = ["All", "Active", "Inactive", "Pending"];

const statusConfig = {
  Active: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    spine: "bg-emerald-500",
  },
  Inactive: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    dot: "bg-rose-500",
    spine: "bg-rose-500",
  },
  Pending: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
    spine: "bg-amber-500",
  },
};

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function WorkspaceDirectory() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const filteredWorkspaces = useMemo(() => {
    return workspaces.filter((workspace) => {
      const matchesTab =
        activeTab === "All" ? true : workspace.status === activeTab;

      const matchesSearch = [
        workspace.companyName,
        workspace.workspaceName,
        workspace.owner,
        workspace.email,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <div
      className="min-h-screen p-4 md:p-10"
      style={{
        background: "#F6F5F1",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="mx-auto max-w-7xl space-y-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-emerald-800">
              <LayoutGrid size={13} strokeWidth={2.5} />
              Platform admin
            </div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#171B21]">
              Workspace directory
            </h1>
            <p className="mt-1.5 text-sm text-[#6B6F76]">
              {workspaces.length} tenant workspaces &middot; monitor status,
              revenue and ownership
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA0A6]"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search company, owner, email..."
                className="h-11 w-full rounded-xl border border-[#E3E1DA] bg-white pl-9 pr-4 text-sm text-[#171B21] shadow-sm transition placeholder:text-[#9CA0A6] focus:border-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-900/8 sm:w-[280px]"
              />
            </div>

            <button
              onClick={() => setOpenDialog(true)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#14532D] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0F3F22] focus:outline-none focus:ring-4 focus:ring-emerald-900/15"
            >
              <Plus size={16} strokeWidth={2.5} />
              Create workspace
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1 overflow-x-auto border-b border-[#E3E1DA] pb-px no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const count =
              tab === "All"
                ? workspaces.length
                : workspaces.filter((w) => w.status === tab).length;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative inline-flex items-center gap-2 whitespace-nowrap px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#171B21]"
                    : "text-[#8A8E94] hover:text-[#171B21]"
                }`}
              >
                {tab}
                <span
                  className={`font-mono rounded-full px-1.5 py-0.5 text-[11px] ${
                    isActive
                      ? "bg-[#14532D] text-white"
                      : "bg-[#F0EFEA] text-[#8A8E94]"
                  }`}
                >
                  {count}
                </span>
                {isActive && (
                  <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#14532D]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredWorkspaces.map((workspace) => {
            const status =
              statusConfig[workspace.status] || statusConfig.Inactive;
            const isPositive = workspace.growth >= 0;

            return (
              <div
                key={workspace.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E3E1DA] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 ${status.spine}`}
                />

                <div className="p-5 pl-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${workspace.accent} text-sm font-semibold text-white shadow-inner`}
                      >
                        {workspace.initials}
                      </div>
                      <div>
                        <h3 className="font-display text-[15px] font-semibold leading-tight text-[#171B21]">
                          {workspace.companyName}
                        </h3>
                        <p className="font-mono mt-0.5 text-[12px] text-[#9CA0A6]">
                          {workspace.workspaceName}
                        </p>
                      </div>
                    </div>

                    <button className="rounded-lg p-1.5 text-[#B3B6BB] transition hover:bg-[#F5F4F0] hover:text-[#4B5563]">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${status.bg} ${status.text}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                      {workspace.status}
                    </span>
                    <span className="font-mono text-[11px] text-[#9CA0A6]">
                      since {workspace.createdAt}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 divide-x divide-[#EEEDE8] rounded-xl border border-[#EEEDE8] bg-[#FAF9F6] py-3">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <div className="flex items-center gap-1.5 text-[#9CA0A6]">
                        <Users size={13} />
                        <span className="text-[10px] font-medium uppercase tracking-wider">
                          Team
                        </span>
                      </div>
                      <span className="font-mono text-sm font-semibold text-[#171B21]">
                        {workspace.employees}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-1">
                      <div className="flex items-center gap-1.5 text-[#9CA0A6]">
                        <FolderKanban size={13} />
                        <span className="text-[10px] font-medium uppercase tracking-wider">
                          Proj
                        </span>
                      </div>
                      <span className="font-mono text-sm font-semibold text-[#171B21]">
                        {workspace.projects}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-1">
                      <div className="flex items-center gap-1.5 text-[#9CA0A6]">
                        <IndianRupee size={13} />
                        <span className="text-[10px] font-medium uppercase tracking-wider">
                          Rev
                        </span>
                      </div>
                      <span className="font-mono text-sm font-semibold text-[#171B21]">
                        {inr(workspace.revenue)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-[#EEEDE8] bg-[#FAF9F6] px-5 py-3.5 pl-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#E3E1DA] text-xs font-semibold text-[#4B5563] shadow-sm">
                      {workspace.owner.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[#171B21]">
                        {workspace.owner}
                      </div>
                      <div
                        className={`font-mono flex items-center gap-0.5 text-[11px] font-medium ${
                          isPositive ? "text-emerald-700" : "text-rose-600"
                        }`}
                      >
                        {isPositive ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
                        {Math.abs(workspace.growth)}%
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="rounded-lg p-1.5 text-[#8A8E94] transition hover:bg-white hover:text-[#171B21]">
                      <Pencil size={15} />
                    </button>
                    <button className="rounded-lg p-1.5 text-[#8A8E94] transition hover:bg-white hover:text-[#171B21]">
                      <Eye size={15} />
                    </button>
                    <button className="rounded-lg p-1.5 text-[#8A8E94] transition hover:bg-white hover:text-rose-600">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredWorkspaces.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9D7D0] bg-white px-4 py-16 text-center">
            <div className="mb-4 rounded-full bg-[#F5F4F0] p-4 text-[#9CA0A6]">
              <Search size={22} />
            </div>
            <h3 className="font-display text-base font-semibold text-[#171B21]">
              No workspaces match this search
            </h3>
            <p className="mt-1 max-w-sm text-sm text-[#8A8E94]">
              Try a different company, owner, or email — or clear the search to
              see everything.
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-4 text-sm font-medium text-[#14532D] hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {openDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
          <CreateWorkspace
            onCancel={() => setOpenDialog(false)}
            onSubmit={() => {
              setOpenDialog(false);
            }}
          />
        </div>
      )}
    </div>
  );
}