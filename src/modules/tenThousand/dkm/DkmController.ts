import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkms")
export default class DkmController {
  @operation({
    summary: "Get Dkms",
  })
  @get()
  static getDkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkm",
  })
  @post("{id}")
  static createDkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
