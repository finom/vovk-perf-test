import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqps")
export default class LqpController {
  @operation({
    summary: "Get Lqps",
  })
  @get()
  static getLqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqp",
  })
  @post("{id}")
  static createLqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
