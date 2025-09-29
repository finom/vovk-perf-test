import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eups")
export default class EupController {
  @operation({
    summary: "Get Eups",
  })
  @get()
  static getEups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eup",
  })
  @post("{id}")
  static createEup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
