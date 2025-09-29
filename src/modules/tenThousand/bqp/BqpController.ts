import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqps")
export default class BqpController {
  @operation({
    summary: "Get Bqps",
  })
  @get()
  static getBqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqp",
  })
  @post("{id}")
  static createBqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
