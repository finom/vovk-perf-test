import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("miqs")
export default class MiqController {
  @operation({
    summary: "Get Miqs",
  })
  @get()
  static getMiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Miq",
  })
  @post("{id}")
  static createMiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
