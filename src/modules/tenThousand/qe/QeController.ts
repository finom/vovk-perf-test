import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qes")
export default class QeController {
  @operation({
    summary: "Get Qes",
  })
  @get()
  static getQes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qe",
  })
  @post("{id}")
  static createQe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
