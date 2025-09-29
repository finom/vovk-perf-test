import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qqs")
export default class QqController {
  @operation({
    summary: "Get Qqs",
  })
  @get()
  static getQqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qq",
  })
  @post("{id}")
  static createQq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
