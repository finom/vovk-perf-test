import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ozs")
export default class OzController {
  @operation({
    summary: "Get Ozs",
  })
  @get()
  static getOzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Oz",
  })
  @post("{id}")
  static createOz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
