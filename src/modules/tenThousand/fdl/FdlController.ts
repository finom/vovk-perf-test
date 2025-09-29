import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdls")
export default class FdlController {
  @operation({
    summary: "Get Fdls",
  })
  @get()
  static getFdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdl",
  })
  @post("{id}")
  static createFdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
