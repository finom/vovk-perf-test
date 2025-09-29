import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqks")
export default class GqkController {
  @operation({
    summary: "Get Gqks",
  })
  @get()
  static getGqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqk",
  })
  @post("{id}")
  static createGqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
