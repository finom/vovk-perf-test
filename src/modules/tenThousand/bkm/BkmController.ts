import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkms")
export default class BkmController {
  @operation({
    summary: "Get Bkms",
  })
  @get()
  static getBkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkm",
  })
  @post("{id}")
  static createBkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
