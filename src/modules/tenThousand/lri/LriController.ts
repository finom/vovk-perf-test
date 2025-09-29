import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lris")
export default class LriController {
  @operation({
    summary: "Get Lris",
  })
  @get()
  static getLris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lri",
  })
  @post("{id}")
  static createLri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
