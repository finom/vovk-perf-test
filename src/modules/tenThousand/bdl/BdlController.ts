import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdls")
export default class BdlController {
  @operation({
    summary: "Get Bdls",
  })
  @get()
  static getBdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdl",
  })
  @post("{id}")
  static createBdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
