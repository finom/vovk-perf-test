import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irqs")
export default class IrqController {
  @operation({
    summary: "Get Irqs",
  })
  @get()
  static getIrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irq",
  })
  @post("{id}")
  static createIrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
