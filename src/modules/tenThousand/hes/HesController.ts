import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hes")
export default class HesController {
  @operation({
    summary: "Get Hes",
  })
  @get()
  static getHes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hes",
  })
  @post("{id}")
  static createHes = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
