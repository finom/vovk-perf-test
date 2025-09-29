import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqps")
export default class JqpController {
  @operation({
    summary: "Get Jqps",
  })
  @get()
  static getJqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqp",
  })
  @post("{id}")
  static createJqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
