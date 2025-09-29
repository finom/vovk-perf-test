import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdhs")
export default class GdhController {
  @operation({
    summary: "Get Gdhs",
  })
  @get()
  static getGdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdh",
  })
  @post("{id}")
  static createGdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
