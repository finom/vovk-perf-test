import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idms")
export default class IdmController {
  @operation({
    summary: "Get Idms",
  })
  @get()
  static getIdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idm",
  })
  @post("{id}")
  static createIdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
