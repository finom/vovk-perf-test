import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdls")
export default class MdlController {
  @operation({
    summary: "Get Mdls",
  })
  @get()
  static getMdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdl",
  })
  @post("{id}")
  static createMdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
