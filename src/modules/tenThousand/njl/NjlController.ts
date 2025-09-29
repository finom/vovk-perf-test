import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njls")
export default class NjlController {
  @operation({
    summary: "Get Njls",
  })
  @get()
  static getNjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njl",
  })
  @post("{id}")
  static createNjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
