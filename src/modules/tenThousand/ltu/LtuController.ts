import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltus")
export default class LtuController {
  @operation({
    summary: "Get Ltus",
  })
  @get()
  static getLtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltu",
  })
  @post("{id}")
  static createLtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
