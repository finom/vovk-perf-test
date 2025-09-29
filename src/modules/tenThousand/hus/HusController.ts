import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huses")
export default class HusController {
  @operation({
    summary: "Get Huses",
  })
  @get()
  static getHuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hus",
  })
  @post("{id}")
  static createHus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
