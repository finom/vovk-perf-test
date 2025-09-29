import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhvs")
export default class HhvController {
  @operation({
    summary: "Get Hhvs",
  })
  @get()
  static getHhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhv",
  })
  @post("{id}")
  static createHhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
