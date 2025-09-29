import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqies")
export default class BqyController {
  @operation({
    summary: "Get Bqies",
  })
  @get()
  static getBqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqy",
  })
  @post("{id}")
  static createBqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
