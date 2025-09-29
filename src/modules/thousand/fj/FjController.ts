import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjs")
export default class FjController {
  @operation({
    summary: "Get Fjs",
  })
  @get()
  static getFjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fj",
  })
  @post("{id}")
  static createFj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
