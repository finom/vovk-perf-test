import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abfs")
export default class AbfController {
  @operation({
    summary: "Get Abfs",
  })
  @get()
  static getAbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abf",
  })
  @post("{id}")
  static createAbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
