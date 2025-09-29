import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irjs")
export default class IrjController {
  @operation({
    summary: "Get Irjs",
  })
  @get()
  static getIrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irj",
  })
  @post("{id}")
  static createIrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
