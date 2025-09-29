import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lods")
export default class LodController {
  @operation({
    summary: "Get Lods",
  })
  @get()
  static getLods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lod",
  })
  @post("{id}")
  static createLod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
