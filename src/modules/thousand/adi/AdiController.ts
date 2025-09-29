import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adis")
export default class AdiController {
  @operation({
    summary: "Get Adis",
  })
  @get()
  static getAdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adi",
  })
  @post("{id}")
  static createAdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
