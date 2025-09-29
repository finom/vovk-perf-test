import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibws")
export default class IbwController {
  @operation({
    summary: "Get Ibws",
  })
  @get()
  static getIbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibw",
  })
  @post("{id}")
  static createIbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
