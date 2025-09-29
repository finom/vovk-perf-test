import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aeus")
export default class AeuController {
  @operation({
    summary: "Get Aeus",
  })
  @get()
  static getAeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aeu",
  })
  @post("{id}")
  static createAeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
