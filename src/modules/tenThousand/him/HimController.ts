import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hims")
export default class HimController {
  @operation({
    summary: "Get Hims",
  })
  @get()
  static getHims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Him",
  })
  @post("{id}")
  static createHim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
