import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jums")
export default class JumController {
  @operation({
    summary: "Get Jums",
  })
  @get()
  static getJums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jum",
  })
  @post("{id}")
  static createJum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
