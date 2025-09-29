import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezws")
export default class EzwController {
  @operation({
    summary: "Get Ezws",
  })
  @get()
  static getEzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezw",
  })
  @post("{id}")
  static createEzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
