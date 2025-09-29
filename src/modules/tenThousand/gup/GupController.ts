import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gups")
export default class GupController {
  @operation({
    summary: "Get Gups",
  })
  @get()
  static getGups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gup",
  })
  @post("{id}")
  static createGup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
