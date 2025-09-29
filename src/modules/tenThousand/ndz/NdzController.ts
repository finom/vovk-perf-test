import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndzs")
export default class NdzController {
  @operation({
    summary: "Get Ndzs",
  })
  @get()
  static getNdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndz",
  })
  @post("{id}")
  static createNdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
