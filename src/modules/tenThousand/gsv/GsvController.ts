import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsvs")
export default class GsvController {
  @operation({
    summary: "Get Gsvs",
  })
  @get()
  static getGsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsv",
  })
  @post("{id}")
  static createGsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
