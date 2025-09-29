import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddls")
export default class DdlController {
  @operation({
    summary: "Get Ddls",
  })
  @get()
  static getDdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddl",
  })
  @post("{id}")
  static createDdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
