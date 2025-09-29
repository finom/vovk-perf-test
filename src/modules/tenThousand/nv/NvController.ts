import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nvs")
export default class NvController {
  @operation({
    summary: "Get Nvs",
  })
  @get()
  static getNvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nv",
  })
  @post("{id}")
  static createNv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
