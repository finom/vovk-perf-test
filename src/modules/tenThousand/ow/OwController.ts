import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ows")
export default class OwController {
  @operation({
    summary: "Get Ows",
  })
  @get()
  static getOws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ow",
  })
  @post("{id}")
  static createOw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
