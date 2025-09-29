import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqies")
export default class GqyController {
  @operation({
    summary: "Get Gqies",
  })
  @get()
  static getGqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqy",
  })
  @post("{id}")
  static createGqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
