import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqps")
export default class HqpController {
  @operation({
    summary: "Get Hqps",
  })
  @get()
  static getHqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqp",
  })
  @post("{id}")
  static createHqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
