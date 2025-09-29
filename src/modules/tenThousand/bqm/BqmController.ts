import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqms")
export default class BqmController {
  @operation({
    summary: "Get Bqms",
  })
  @get()
  static getBqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqm",
  })
  @post("{id}")
  static createBqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
