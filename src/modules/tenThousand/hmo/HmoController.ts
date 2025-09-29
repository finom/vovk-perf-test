import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmos")
export default class HmoController {
  @operation({
    summary: "Get Hmos",
  })
  @get()
  static getHmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmo",
  })
  @post("{id}")
  static createHmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
