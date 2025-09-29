import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmls")
export default class GmlController {
  @operation({
    summary: "Get Gmls",
  })
  @get()
  static getGmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gml",
  })
  @post("{id}")
  static createGml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
