import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dirs")
export default class DirController {
  @operation({
    summary: "Get Dirs",
  })
  @get()
  static getDirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dir",
  })
  @post("{id}")
  static createDir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
