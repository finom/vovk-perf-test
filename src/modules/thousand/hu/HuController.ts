import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hus")
export default class HuController {
  @operation({
    summary: "Get Hus",
  })
  @get()
  static getHus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hu",
  })
  @post("{id}")
  static createHu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
