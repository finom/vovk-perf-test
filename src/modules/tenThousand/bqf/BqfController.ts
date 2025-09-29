import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqfs")
export default class BqfController {
  @operation({
    summary: "Get Bqfs",
  })
  @get()
  static getBqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqf",
  })
  @post("{id}")
  static createBqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
