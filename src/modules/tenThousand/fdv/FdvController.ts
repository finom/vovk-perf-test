import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdvs")
export default class FdvController {
  @operation({
    summary: "Get Fdvs",
  })
  @get()
  static getFdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdv",
  })
  @post("{id}")
  static createFdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
