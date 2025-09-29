import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frus")
export default class FruController {
  @operation({
    summary: "Get Frus",
  })
  @get()
  static getFrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fru",
  })
  @post("{id}")
  static createFru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
