import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdvs")
export default class MdvController {
  @operation({
    summary: "Get Mdvs",
  })
  @get()
  static getMdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdv",
  })
  @post("{id}")
  static createMdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
