import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbls")
export default class HblController {
  @operation({
    summary: "Get Hbls",
  })
  @get()
  static getHbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbl",
  })
  @post("{id}")
  static createHbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
