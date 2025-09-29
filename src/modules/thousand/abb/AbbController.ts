import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abbs")
export default class AbbController {
  @operation({
    summary: "Get Abbs",
  })
  @get()
  static getAbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abb",
  })
  @post("{id}")
  static createAbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
