import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akms")
export default class AkmController {
  @operation({
    summary: "Get Akms",
  })
  @get()
  static getAkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akm",
  })
  @post("{id}")
  static createAkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
