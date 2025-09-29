import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqis")
export default class BqiController {
  @operation({
    summary: "Get Bqis",
  })
  @get()
  static getBqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqi",
  })
  @post("{id}")
  static createBqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
