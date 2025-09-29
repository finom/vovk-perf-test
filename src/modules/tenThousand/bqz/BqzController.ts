import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqzs")
export default class BqzController {
  @operation({
    summary: "Get Bqzs",
  })
  @get()
  static getBqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqz",
  })
  @post("{id}")
  static createBqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
