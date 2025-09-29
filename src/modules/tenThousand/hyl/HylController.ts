import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyls")
export default class HylController {
  @operation({
    summary: "Get Hyls",
  })
  @get()
  static getHyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyl",
  })
  @post("{id}")
  static createHyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
