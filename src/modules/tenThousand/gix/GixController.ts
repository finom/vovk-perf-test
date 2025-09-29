import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gixes")
export default class GixController {
  @operation({
    summary: "Get Gixes",
  })
  @get()
  static getGixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gix",
  })
  @post("{id}")
  static createGix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
