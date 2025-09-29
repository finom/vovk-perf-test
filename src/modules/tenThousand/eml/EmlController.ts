import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emls")
export default class EmlController {
  @operation({
    summary: "Get Emls",
  })
  @get()
  static getEmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eml",
  })
  @post("{id}")
  static createEml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
