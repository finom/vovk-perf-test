import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agms")
export default class AgmController {
  @operation({
    summary: "Get Agms",
  })
  @get()
  static getAgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agm",
  })
  @post("{id}")
  static createAgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
