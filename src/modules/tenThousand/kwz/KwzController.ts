import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwzs")
export default class KwzController {
  @operation({
    summary: "Get Kwzs",
  })
  @get()
  static getKwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwz",
  })
  @post("{id}")
  static createKwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
