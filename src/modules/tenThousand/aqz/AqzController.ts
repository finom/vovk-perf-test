import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqzs")
export default class AqzController {
  @operation({
    summary: "Get Aqzs",
  })
  @get()
  static getAqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqz",
  })
  @post("{id}")
  static createAqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
