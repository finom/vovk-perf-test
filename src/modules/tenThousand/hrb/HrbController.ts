import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrbs")
export default class HrbController {
  @operation({
    summary: "Get Hrbs",
  })
  @get()
  static getHrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrb",
  })
  @post("{id}")
  static createHrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
