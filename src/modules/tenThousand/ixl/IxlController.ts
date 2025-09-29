import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixls")
export default class IxlController {
  @operation({
    summary: "Get Ixls",
  })
  @get()
  static getIxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixl",
  })
  @post("{id}")
  static createIxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
