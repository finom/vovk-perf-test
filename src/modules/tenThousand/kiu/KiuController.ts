import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kius")
export default class KiuController {
  @operation({
    summary: "Get Kius",
  })
  @get()
  static getKius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kiu",
  })
  @post("{id}")
  static createKiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
