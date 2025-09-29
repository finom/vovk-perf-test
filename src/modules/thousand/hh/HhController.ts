import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhs")
export default class HhController {
  @operation({
    summary: "Get Hhs",
  })
  @get()
  static getHhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hh",
  })
  @post("{id}")
  static createHh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
