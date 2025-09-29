import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eeys")
export default class EeyController {
  @operation({
    summary: "Get Eeys",
  })
  @get()
  static getEeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eey",
  })
  @post("{id}")
  static createEey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
