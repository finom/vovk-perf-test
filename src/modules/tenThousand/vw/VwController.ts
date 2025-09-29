import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vws")
export default class VwController {
  @operation({
    summary: "Get Vws",
  })
  @get()
  static getVws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vw",
  })
  @post("{id}")
  static createVw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
