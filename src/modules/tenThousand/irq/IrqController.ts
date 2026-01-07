import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irq")
export default class IrqController {
  @operation({
    summary: "Get Irq",
  })
  @get()
  static getIrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irq",
  })
  @post("{id}")
  static createIrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
