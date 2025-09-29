import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atzs")
export default class AtzController {
  @operation({
    summary: "Get Atzs",
  })
  @get()
  static getAtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atz",
  })
  @post("{id}")
  static createAtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
