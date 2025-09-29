import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckps")
export default class CkpController {
  @operation({
    summary: "Get Ckps",
  })
  @get()
  static getCkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckp",
  })
  @post("{id}")
  static createCkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
