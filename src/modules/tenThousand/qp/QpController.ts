import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qps")
export default class QpController {
  @operation({
    summary: "Get Qps",
  })
  @get()
  static getQps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qp",
  })
  @post("{id}")
  static createQp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
