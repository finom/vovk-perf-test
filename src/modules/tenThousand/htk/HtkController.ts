import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htks")
export default class HtkController {
  @operation({
    summary: "Get Htks",
  })
  @get()
  static getHtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htk",
  })
  @post("{id}")
  static createHtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
