function reportableClassDecorator<Type extends { new(...args: any[]): {} }>(
  constructor: Type
) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;

  imprimir(){
    console.log('Hello Mundo')
  }
}

const miClase = new BugReport();
console.log('miClase', miClase)

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
//bug.reportingURL;//Property 'reportingURL' does not exist on type 'BugReport'.