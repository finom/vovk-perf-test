import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awas")
export default class AwaController {
  @operation({
    summary: "Get Awas",
  })
  @get()
  static getAwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awa",
  })
  @post("{id}")
  static createAwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
