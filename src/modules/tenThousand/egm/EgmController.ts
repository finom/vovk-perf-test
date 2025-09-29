import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egms")
export default class EgmController {
  @operation({
    summary: "Get Egms",
  })
  @get()
  static getEgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egm",
  })
  @post("{id}")
  static createEgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
