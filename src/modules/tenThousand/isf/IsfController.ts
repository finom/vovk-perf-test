import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isfs")
export default class IsfController {
  @operation({
    summary: "Get Isfs",
  })
  @get()
  static getIsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isf",
  })
  @post("{id}")
  static createIsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
