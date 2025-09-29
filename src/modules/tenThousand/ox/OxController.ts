import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("oxen")
export default class OxController {
  @operation({
    summary: "Get Oxen",
  })
  @get()
  static getOxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ox",
  })
  @post("{id}")
  static createOx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
