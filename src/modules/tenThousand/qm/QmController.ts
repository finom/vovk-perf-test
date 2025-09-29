import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qms")
export default class QmController {
  @operation({
    summary: "Get Qms",
  })
  @get()
  static getQms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qm",
  })
  @post("{id}")
  static createQm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
