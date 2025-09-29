import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixrs")
export default class IxrController {
  @operation({
    summary: "Get Ixrs",
  })
  @get()
  static getIxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixr",
  })
  @post("{id}")
  static createIxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
