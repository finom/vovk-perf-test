import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkms")
export default class GkmController {
  @operation({
    summary: "Get Gkms",
  })
  @get()
  static getGkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkm",
  })
  @post("{id}")
  static createGkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
