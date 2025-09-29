import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqms")
export default class AqmController {
  @operation({
    summary: "Get Aqms",
  })
  @get()
  static getAqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqm",
  })
  @post("{id}")
  static createAqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
