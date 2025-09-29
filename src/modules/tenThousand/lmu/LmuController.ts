import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmus")
export default class LmuController {
  @operation({
    summary: "Get Lmus",
  })
  @get()
  static getLmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmu",
  })
  @post("{id}")
  static createLmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
