import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ps")
export default class PsController {
  @operation({
    summary: "Get Ps",
  })
  @get()
  static getPs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ps",
  })
  @post("{id}")
  static createPs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
