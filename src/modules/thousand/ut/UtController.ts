import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uts")
export default class UtController {
  @operation({
    summary: "Get Uts",
  })
  @get()
  static getUts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ut",
  })
  @post("{id}")
  static createUt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
