import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckns")
export default class CknController {
  @operation({
    summary: "Get Ckns",
  })
  @get()
  static getCkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckn",
  })
  @post("{id}")
  static createCkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
