import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekms")
export default class EkmController {
  @operation({
    summary: "Get Ekms",
  })
  @get()
  static getEkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekm",
  })
  @post("{id}")
  static createEkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
