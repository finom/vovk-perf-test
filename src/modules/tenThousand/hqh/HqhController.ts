import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqhs")
export default class HqhController {
  @operation({
    summary: "Get Hqhs",
  })
  @get()
  static getHqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqh",
  })
  @post("{id}")
  static createHqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
