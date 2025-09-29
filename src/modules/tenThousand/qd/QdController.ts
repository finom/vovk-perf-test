import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qds")
export default class QdController {
  @operation({
    summary: "Get Qds",
  })
  @get()
  static getQds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qd",
  })
  @post("{id}")
  static createQd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
