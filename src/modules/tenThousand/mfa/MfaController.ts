import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfas")
export default class MfaController {
  @operation({
    summary: "Get Mfas",
  })
  @get()
  static getMfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfa",
  })
  @post("{id}")
  static createMfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
