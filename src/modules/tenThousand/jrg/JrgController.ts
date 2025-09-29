import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrgs")
export default class JrgController {
  @operation({
    summary: "Get Jrgs",
  })
  @get()
  static getJrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrg",
  })
  @post("{id}")
  static createJrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
