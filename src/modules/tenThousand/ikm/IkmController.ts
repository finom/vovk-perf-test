import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikms")
export default class IkmController {
  @operation({
    summary: "Get Ikms",
  })
  @get()
  static getIkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikm",
  })
  @post("{id}")
  static createIkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
