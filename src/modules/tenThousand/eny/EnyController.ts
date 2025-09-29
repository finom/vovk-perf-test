import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enies")
export default class EnyController {
  @operation({
    summary: "Get Enies",
  })
  @get()
  static getEnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eny",
  })
  @post("{id}")
  static createEny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
