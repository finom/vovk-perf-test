import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqxes")
export default class GqxController {
  @operation({
    summary: "Get Gqxes",
  })
  @get()
  static getGqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqx",
  })
  @post("{id}")
  static createGqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
