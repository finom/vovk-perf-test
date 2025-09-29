import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzus")
export default class HzuController {
  @operation({
    summary: "Get Hzus",
  })
  @get()
  static getHzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzu",
  })
  @post("{id}")
  static createHzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
