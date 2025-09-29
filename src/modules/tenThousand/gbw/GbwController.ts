import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbws")
export default class GbwController {
  @operation({
    summary: "Get Gbws",
  })
  @get()
  static getGbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbw",
  })
  @post("{id}")
  static createGbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
