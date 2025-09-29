import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqvs")
export default class GqvController {
  @operation({
    summary: "Get Gqvs",
  })
  @get()
  static getGqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqv",
  })
  @post("{id}")
  static createGqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
