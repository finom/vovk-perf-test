import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqps")
export default class KqpController {
  @operation({
    summary: "Get Kqps",
  })
  @get()
  static getKqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqp",
  })
  @post("{id}")
  static createKqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
