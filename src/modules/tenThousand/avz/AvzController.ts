import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avzs")
export default class AvzController {
  @operation({
    summary: "Get Avzs",
  })
  @get()
  static getAvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avz",
  })
  @post("{id}")
  static createAvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
