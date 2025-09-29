import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkms")
export default class NkmController {
  @operation({
    summary: "Get Nkms",
  })
  @get()
  static getNkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkm",
  })
  @post("{id}")
  static createNkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
