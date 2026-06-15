import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Users,
  FileText,
  Settings,
  Lock,
  Zap,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Eye,
  Edit3,
  Trash2,
  PieChart,
  Activity,
} from "lucide-react";
import { Link } from "wouter";

export default function AdminShowcase() {
  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-500/50 rounded-full text-teal-300 text-sm font-medium">
              ✨ Powerful Management System
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Super Admin Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              Take complete control of your ABC of Islam website with our intuitive, feature-rich admin dashboard. Manage content, users, and track statistics—all without writing a single line of code.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/admin">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Access Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-700">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 pt-8">
            {[
              { icon: "📊", label: "Analytics" },
              { icon: "👥", label: "Users" },
              { icon: "📝", label: "Content" },
              { icon: "🔒", label: "Security" },
              { icon: "⚡", label: "Fast" },
              { icon: "🎯", label: "Easy" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs text-slate-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-slate-300">Everything you need to manage your site effectively</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="h-8 w-8 text-teal-400" />,
                title: "Content Management",
                description: "Add, edit, and delete learning modules and navigation buttons with ease. Organize content with custom ordering.",
              },
              {
                icon: <Users className="h-8 w-8 text-cyan-400" />,
                title: "User Management",
                description: "Control user roles and status. Promote admins, ban users, and track user activity in real-time.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
                title: "Real-Time Analytics",
                description: "Track visitors, user growth, and engagement metrics with beautiful charts and statistics.",
              },
              {
                icon: <Activity className="h-8 w-8 text-purple-400" />,
                title: "Activity Logs",
                description: "Complete audit trail of all admin actions. See who did what and when for compliance and security.",
              },
              {
                icon: <Lock className="h-8 w-8 text-indigo-400" />,
                title: "Role-Based Security",
                description: "Secure admin-only access with role-based permissions. Protect your data with Firebase security rules.",
              },
              {
                icon: <Zap className="h-8 w-8 text-yellow-400" />,
                title: "Lightning Fast",
                description: "Real-time database updates powered by Firebase. See changes instantly across your entire site.",
              },
            ].map((feature, i) => (
              <Card key={i} className="bg-slate-700/50 border-slate-600 hover:border-teal-500 transition-colors">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Powerful Capabilities</h2>

          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-slate-700/50 border border-slate-600">
              <TabsTrigger value="content" className="data-[state=active]:bg-teal-500">
                <FileText className="h-4 w-4 mr-2" />
                Content
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-teal-500">
                <Users className="h-4 w-4 mr-2" />
                Users
              </TabsTrigger>
              <TabsTrigger value="stats" className="data-[state=active]:bg-teal-500">
                <BarChart3 className="h-4 w-4 mr-2" />
                Stats
              </TabsTrigger>
              <TabsTrigger value="logs" className="data-[state=active]:bg-teal-500">
                <Activity className="h-4 w-4 mr-2" />
                Logs
              </TabsTrigger>
            </TabsList>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-6">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <FileText className="h-6 w-6 text-teal-400" />
                    Content Management System
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Manage all your learning modules and navigation buttons from one place
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-teal-400">Learning Modules</h3>
                      <ul className="space-y-3">
                        {[
                          "Add new learning modules instantly",
                          "Edit existing content without code",
                          "Delete outdated modules",
                          "Organize with custom ordering",
                          "Add images and links",
                          "Preview before publishing",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-cyan-400">Navigation Buttons</h3>
                      <ul className="space-y-3">
                        {[
                          "Create navigation buttons easily",
                          "Upload custom images",
                          "Set button destinations",
                          "Reorder buttons visually",
                          "Edit button properties",
                          "Delete unused buttons",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-4">Quick Actions</h4>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-2 rounded">
                        <Edit3 className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">Edit Content</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-2 rounded">
                        <Trash2 className="h-4 w-4 text-red-400" />
                        <span className="text-sm">Delete Items</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-2 rounded">
                        <Eye className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">Preview</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Users className="h-6 w-6 text-cyan-400" />
                    User Management
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Complete control over user accounts and permissions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-cyan-400">User Controls</h3>
                      <ul className="space-y-3">
                        {[
                          "View all registered users",
                          "Change user roles (User/Admin)",
                          "Update user status",
                          "Track user creation date",
                          "Monitor last login time",
                          "Delete user accounts",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-purple-400">User Status Options</h3>
                      <ul className="space-y-3">
                        {[
                          "🟢 Active - User can log in",
                          "🟡 Inactive - Account disabled",
                          "🔴 Banned - User blocked",
                          "👑 Admin - Full dashboard access",
                          "👤 User - Regular access only",
                          "📊 View user analytics",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-3">User Management Workflow</h4>
                    <div className="space-y-2 text-sm text-slate-300">
                      <p>1. View all users in a clean table</p>
                      <p>2. Click on any user to see details</p>
                      <p>3. Use dropdowns to change role or status</p>
                      <p>4. Changes apply instantly</p>
                      <p>5. All actions are logged for audit trail</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Stats Tab */}
            <TabsContent value="stats" className="space-y-6">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                    Real-Time Statistics
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Monitor your site's performance with beautiful analytics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-blue-400">Key Metrics</h3>
                      <div className="space-y-3">
                        {[
                          { label: "Total Visitors", value: "Real-time count" },
                          { label: "Total Users", value: "Registered accounts" },
                          { label: "Active Users", value: "Currently active" },
                          { label: "Admin Count", value: "Admin accounts" },
                        ].map((metric, i) => (
                          <div key={i} className="flex justify-between items-center bg-slate-800/50 p-3 rounded">
                            <span className="text-slate-300">{metric.label}</span>
                            <span className="text-teal-400 font-semibold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-purple-400">Visual Analytics</h3>
                      <ul className="space-y-3">
                        {[
                          "User Status Distribution (Pie Chart)",
                          "User Role Distribution (Pie Chart)",
                          "Recent Users List",
                          "Visitor Trends",
                          "Growth Analytics",
                          "Custom Date Ranges",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <PieChart className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-3">📊 Data Visualization</h4>
                    <p className="text-slate-300 text-sm">
                      All statistics are displayed with interactive charts powered by Recharts. Hover over data points to see detailed information. Refresh stats manually to get the latest data.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Logs Tab */}
            <TabsContent value="logs" className="space-y-6">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Activity className="h-6 w-6 text-indigo-400" />
                    Activity Logs & Audit Trail
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Complete record of all admin actions for security and compliance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-indigo-400">Logged Actions</h3>
                      <ul className="space-y-3">
                        {[
                          "🟢 CREATE - New items added",
                          "🔵 UPDATE - Items modified",
                          "🔴 DELETE - Items removed",
                          "🟣 UPDATE_ROLE - User role changed",
                          "🟡 UPDATE_STATUS - User status changed",
                          "📋 All actions timestamped",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-pink-400">Log Details</h3>
                      <ul className="space-y-3">
                        {[
                          "Admin ID - Who made the change",
                          "Action Type - What was done",
                          "Target - What was modified",
                          "Details - Additional information",
                          "Timestamp - Exact time of action",
                          "Sortable & Filterable",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-500/30 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-3">🔍 Audit Trail Benefits</h4>
                    <div className="space-y-2 text-sm text-slate-300">
                      <p>✓ Track all changes made to your site</p>
                      <p>✓ Identify who made specific changes</p>
                      <p>✓ Maintain compliance records</p>
                      <p>✓ Troubleshoot issues quickly</p>
                      <p>✓ Prevent unauthorized access</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-slate-300">Your data is protected with industry-standard security</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8 text-green-400" />,
                title: "Role-Based Access",
                description: "Only admins can access the dashboard. Regular users cannot modify content.",
              },
              {
                icon: <Lock className="h-8 w-8 text-blue-400" />,
                title: "Firebase Security",
                description: "Enterprise-grade security with Firestore rules and encrypted data storage.",
              },
              {
                icon: <Activity className="h-8 w-8 text-purple-400" />,
                title: "Audit Logging",
                description: "Every action is logged and timestamped for complete transparency.",
              },
            ].map((item, i) => (
              <Card key={i} className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why You'll Love It</h2>
            <p className="text-xl text-slate-300">Designed for simplicity and power</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "⚡",
                title: "No Coding Required",
                description: "Manage your entire site through an intuitive user interface. No technical skills needed.",
              },
              {
                icon: "🚀",
                title: "Lightning Fast",
                description: "Real-time updates powered by Firebase. See changes instantly across your site.",
              },
              {
                icon: "📱",
                title: "Mobile Responsive",
                description: "Manage your site from any device. Works perfectly on desktop, tablet, and mobile.",
              },
              {
                icon: "🔒",
                title: "Secure & Protected",
                description: "Enterprise-grade security with role-based access control and audit logging.",
              },
              {
                icon: "📊",
                title: "Data-Driven Insights",
                description: "Beautiful charts and analytics help you understand your audience better.",
              },
              {
                icon: "🎯",
                title: "Easy to Use",
                description: "Intuitive interface designed for non-technical users. Get started in minutes.",
              },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-4xl flex-shrink-0">{benefit.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border-y border-teal-500/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Take Control?</h2>
          <p className="text-xl text-slate-300">
            Start managing your ABC of Islam website with the Super Admin Dashboard today.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/admin">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-700">
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {[
              { number: "100%", label: "Feature Complete" },
              { number: "0", label: "Coding Required" },
              { number: "∞", label: "Scalability" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl font-bold text-teal-400">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">Dashboard</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/admin" className="hover:text-teal-400">Access Dashboard</a></li>
                <li><a href="#content" className="hover:text-teal-400">Content Management</a></li>
                <li><a href="#users" className="hover:text-teal-400">User Management</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Documentation</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-teal-400">Setup Guide</a></li>
                <li><a href="#" className="hover:text-teal-400">User Guide</a></li>
                <li><a href="#" className="hover:text-teal-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-teal-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-teal-400">Report Issue</a></li>
                <li><a href="#" className="hover:text-teal-400">Feature Request</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-teal-400">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>© 2026 ABC of Islam. Super Admin Dashboard. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
