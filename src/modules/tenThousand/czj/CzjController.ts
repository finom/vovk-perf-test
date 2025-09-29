import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czjs")
export default class CzjController {
  @operation({
    summary: "Get Czjs",
  })
  @get()
  static getCzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czj",
  })
  @post("{id}")
  static createCzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
