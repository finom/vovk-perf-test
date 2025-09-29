import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adps")
export default class AdpController {
  @operation({
    summary: "Get Adps",
  })
  @get()
  static getAdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adp",
  })
  @post("{id}")
  static createAdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
