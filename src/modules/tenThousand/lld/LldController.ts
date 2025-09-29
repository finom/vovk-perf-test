import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llds")
export default class LldController {
  @operation({
    summary: "Get Llds",
  })
  @get()
  static getLlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lld",
  })
  @post("{id}")
  static createLld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
