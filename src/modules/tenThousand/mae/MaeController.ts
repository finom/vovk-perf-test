import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("maes")
export default class MaeController {
  @operation({
    summary: "Get Maes",
  })
  @get()
  static getMaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mae",
  })
  @post("{id}")
  static createMae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
