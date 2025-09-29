import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qcs")
export default class QcController {
  @operation({
    summary: "Get Qcs",
  })
  @get()
  static getQcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qc",
  })
  @post("{id}")
  static createQc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
