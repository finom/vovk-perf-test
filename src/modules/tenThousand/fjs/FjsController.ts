import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjs")
export default class FjsController {
  @operation({
    summary: "Get Fjs",
  })
  @get()
  static getFjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjs",
  })
  @post("{id}")
  static createFjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
