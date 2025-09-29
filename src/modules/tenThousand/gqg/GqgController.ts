import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqgs")
export default class GqgController {
  @operation({
    summary: "Get Gqgs",
  })
  @get()
  static getGqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqg",
  })
  @post("{id}")
  static createGqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
