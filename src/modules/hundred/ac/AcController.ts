import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acs")
export default class AcController {
  @operation({
    summary: "Get Acs",
  })
  @get()
  static getAcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ac",
  })
  @post("{id}")
  static createAc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
