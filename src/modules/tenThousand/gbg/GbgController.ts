import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbgs")
export default class GbgController {
  @operation({
    summary: "Get Gbgs",
  })
  @get()
  static getGbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbg",
  })
  @post("{id}")
  static createGbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
