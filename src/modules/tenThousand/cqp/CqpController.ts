import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqps")
export default class CqpController {
  @operation({
    summary: "Get Cqps",
  })
  @get()
  static getCqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqp",
  })
  @post("{id}")
  static createCqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
