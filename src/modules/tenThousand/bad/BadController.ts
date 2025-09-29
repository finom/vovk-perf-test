import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bads")
export default class BadController {
  @operation({
    summary: "Get Bads",
  })
  @get()
  static getBads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bad",
  })
  @post("{id}")
  static createBad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
