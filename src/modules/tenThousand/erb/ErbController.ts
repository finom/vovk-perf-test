import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erbs")
export default class ErbController {
  @operation({
    summary: "Get Erbs",
  })
  @get()
  static getErbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erb",
  })
  @post("{id}")
  static createErb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
