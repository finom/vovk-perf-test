import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqzs")
export default class GqzController {
  @operation({
    summary: "Get Gqzs",
  })
  @get()
  static getGqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqz",
  })
  @post("{id}")
  static createGqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
