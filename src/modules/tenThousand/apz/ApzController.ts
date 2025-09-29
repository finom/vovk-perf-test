import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apzs")
export default class ApzController {
  @operation({
    summary: "Get Apzs",
  })
  @get()
  static getApzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apz",
  })
  @post("{id}")
  static createApz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
