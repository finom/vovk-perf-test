import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("heis")
export default class HeiController {
  @operation({
    summary: "Get Heis",
  })
  @get()
  static getHeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hei",
  })
  @post("{id}")
  static createHei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
