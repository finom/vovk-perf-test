import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("geis")
export default class GeiController {
  @operation({
    summary: "Get Geis",
  })
  @get()
  static getGeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gei",
  })
  @post("{id}")
  static createGei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
