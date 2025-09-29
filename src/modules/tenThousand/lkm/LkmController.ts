import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkms")
export default class LkmController {
  @operation({
    summary: "Get Lkms",
  })
  @get()
  static getLkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkm",
  })
  @post("{id}")
  static createLkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
