import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hms")
export default class HmController {
  @operation({
    summary: "Get Hms",
  })
  @get()
  static getHms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hm",
  })
  @post("{id}")
  static createHm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
