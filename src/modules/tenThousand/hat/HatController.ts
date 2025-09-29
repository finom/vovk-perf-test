import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hats")
export default class HatController {
  @operation({
    summary: "Get Hats",
  })
  @get()
  static getHats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hat",
  })
  @post("{id}")
  static createHat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
