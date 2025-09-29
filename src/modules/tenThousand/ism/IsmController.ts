import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isms")
export default class IsmController {
  @operation({
    summary: "Get Isms",
  })
  @get()
  static getIsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ism",
  })
  @post("{id}")
  static createIsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
