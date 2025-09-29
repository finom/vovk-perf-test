import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uvs")
export default class UvController {
  @operation({
    summary: "Get Uvs",
  })
  @get()
  static getUvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uv",
  })
  @post("{id}")
  static createUv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
