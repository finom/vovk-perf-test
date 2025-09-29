import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gims")
export default class GimController {
  @operation({
    summary: "Get Gims",
  })
  @get()
  static getGims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gim",
  })
  @post("{id}")
  static createGim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
