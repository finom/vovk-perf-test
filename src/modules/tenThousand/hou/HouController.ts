import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hous")
export default class HouController {
  @operation({
    summary: "Get Hous",
  })
  @get()
  static getHous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hou",
  })
  @post("{id}")
  static createHou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
