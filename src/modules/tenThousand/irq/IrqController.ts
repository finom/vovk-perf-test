import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irq")
export default class IrqController {
  @operation({
    summary: "Get Irq",
  })
  @get()
  static getIrq = procedure({
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
