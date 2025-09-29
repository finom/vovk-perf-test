import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjes")
export default class CjeController {
  @operation({
    summary: "Get Cjes",
  })
  @get()
  static getCjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cje",
  })
  @post("{id}")
  static createCje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
