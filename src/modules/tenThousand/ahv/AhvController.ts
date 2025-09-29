import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahvs")
export default class AhvController {
  @operation({
    summary: "Get Ahvs",
  })
  @get()
  static getAhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahv",
  })
  @post("{id}")
  static createAhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
