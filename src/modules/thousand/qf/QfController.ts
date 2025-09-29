import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qfs")
export default class QfController {
  @operation({
    summary: "Get Qfs",
  })
  @get()
  static getQfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qf",
  })
  @post("{id}")
  static createQf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
