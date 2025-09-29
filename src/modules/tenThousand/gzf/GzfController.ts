import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzfs")
export default class GzfController {
  @operation({
    summary: "Get Gzfs",
  })
  @get()
  static getGzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzf",
  })
  @post("{id}")
  static createGzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
