import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqvs")
export default class AqvController {
  @operation({
    summary: "Get Aqvs",
  })
  @get()
  static getAqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqv",
  })
  @post("{id}")
  static createAqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
