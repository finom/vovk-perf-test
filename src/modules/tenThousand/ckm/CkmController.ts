import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckms")
export default class CkmController {
  @operation({
    summary: "Get Ckms",
  })
  @get()
  static getCkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckm",
  })
  @post("{id}")
  static createCkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
