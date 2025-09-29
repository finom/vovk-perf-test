import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjos")
export default class BjoController {
  @operation({
    summary: "Get Bjos",
  })
  @get()
  static getBjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjo",
  })
  @post("{id}")
  static createBjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
