import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qls")
export default class QlController {
  @operation({
    summary: "Get Qls",
  })
  @get()
  static getQls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ql",
  })
  @post("{id}")
  static createQl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
