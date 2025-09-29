import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilms")
export default class IlmController {
  @operation({
    summary: "Get Ilms",
  })
  @get()
  static getIlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilm",
  })
  @post("{id}")
  static createIlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
