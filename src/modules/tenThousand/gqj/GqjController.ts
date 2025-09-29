import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqjs")
export default class GqjController {
  @operation({
    summary: "Get Gqjs",
  })
  @get()
  static getGqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqj",
  })
  @post("{id}")
  static createGqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
