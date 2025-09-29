import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byns")
export default class BynController {
  @operation({
    summary: "Get Byns",
  })
  @get()
  static getByns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byn",
  })
  @post("{id}")
  static createByn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
