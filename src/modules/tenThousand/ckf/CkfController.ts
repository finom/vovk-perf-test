import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckfs")
export default class CkfController {
  @operation({
    summary: "Get Ckfs",
  })
  @get()
  static getCkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckf",
  })
  @post("{id}")
  static createCkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
