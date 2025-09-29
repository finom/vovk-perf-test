import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcqs")
export default class BcqController {
  @operation({
    summary: "Get Bcqs",
  })
  @get()
  static getBcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcq",
  })
  @post("{id}")
  static createBcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
