/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">مرحباً بك في نظام المقاولات التخصصية - كرينز</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="font-semibold text-lg mb-2">إحصائيات الأسطول</h2>
          <p className="text-slate-600">هنا ستظهر بيانات المعدات.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="font-semibold text-lg mb-2">المهام المعلقة</h2>
          <p className="text-slate-600">هنا ستظهر المهام التي تحتاج موافقة.</p>
        </div>
      </div>
    </Layout>
  );
}
