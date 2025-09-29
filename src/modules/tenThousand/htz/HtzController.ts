import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htzs")
export default class HtzController {
  @operation({
    summary: "Get Htzs",
  })
  @get()
  static getHtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htz",
  })
  @post("{id}")
  static createHtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
