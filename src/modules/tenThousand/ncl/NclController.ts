import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncls")
export default class NclController {
  @operation({
    summary: "Get Ncls",
  })
  @get()
  static getNcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncl",
  })
  @post("{id}")
  static createNcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
