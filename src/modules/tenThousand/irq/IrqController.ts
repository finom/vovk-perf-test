import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irqs")
export default class IrqController {
  @operation({
    summary: "Get Irqs",
  })
  @get()
  static getIrqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irq",
  })
  @post("{id}")
  static createIrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
