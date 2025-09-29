import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("haes")
export default class HaeController {
  @operation({
    summary: "Get Haes",
  })
  @get()
  static getHaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hae",
  })
  @post("{id}")
  static createHae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
