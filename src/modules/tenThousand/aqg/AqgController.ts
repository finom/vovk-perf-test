import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqgs")
export default class AqgController {
  @operation({
    summary: "Get Aqgs",
  })
  @get()
  static getAqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqg",
  })
  @post("{id}")
  static createAqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
