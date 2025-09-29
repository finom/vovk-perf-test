import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqps")
export default class DqpController {
  @operation({
    summary: "Get Dqps",
  })
  @get()
  static getDqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqp",
  })
  @post("{id}")
  static createDqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
