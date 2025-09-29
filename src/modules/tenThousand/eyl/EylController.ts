import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyls")
export default class EylController {
  @operation({
    summary: "Get Eyls",
  })
  @get()
  static getEyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyl",
  })
  @post("{id}")
  static createEyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
