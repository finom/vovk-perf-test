import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bous")
export default class BouController {
  @operation({
    summary: "Get Bous",
  })
  @get()
  static getBous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bou",
  })
  @post("{id}")
  static createBou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
