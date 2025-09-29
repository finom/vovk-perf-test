import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkfs")
export default class KkfController {
  @operation({
    summary: "Get Kkfs",
  })
  @get()
  static getKkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkf",
  })
  @post("{id}")
  static createKkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
