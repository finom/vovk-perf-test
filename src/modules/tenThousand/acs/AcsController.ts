import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acs")
export default class AcsController {
  @operation({
    summary: "Get Acs",
  })
  @get()
  static getAcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acs",
  })
  @post("{id}")
  static createAcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
