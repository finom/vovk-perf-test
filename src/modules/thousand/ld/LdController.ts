import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lds")
export default class LdController {
  @operation({
    summary: "Get Lds",
  })
  @get()
  static getLds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ld",
  })
  @post("{id}")
  static createLd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
