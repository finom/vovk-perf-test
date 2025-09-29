import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqis")
export default class HqiController {
  @operation({
    summary: "Get Hqis",
  })
  @get()
  static getHqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqi",
  })
  @post("{id}")
  static createHqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
