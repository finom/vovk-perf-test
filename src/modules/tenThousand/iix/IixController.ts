import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iixes")
export default class IixController {
  @operation({
    summary: "Get Iixes",
  })
  @get()
  static getIixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iix",
  })
  @post("{id}")
  static createIix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
