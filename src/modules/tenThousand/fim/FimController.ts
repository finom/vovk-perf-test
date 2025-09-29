import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fims")
export default class FimController {
  @operation({
    summary: "Get Fims",
  })
  @get()
  static getFims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fim",
  })
  @post("{id}")
  static createFim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
