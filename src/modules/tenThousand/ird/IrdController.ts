import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irds")
export default class IrdController {
  @operation({
    summary: "Get Irds",
  })
  @get()
  static getIrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ird",
  })
  @post("{id}")
  static createIrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
