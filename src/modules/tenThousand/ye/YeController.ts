import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yes")
export default class YeController {
  @operation({
    summary: "Get Yes",
  })
  @get()
  static getYes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ye",
  })
  @post("{id}")
  static createYe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
