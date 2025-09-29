import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpbs")
export default class KpbController {
  @operation({
    summary: "Get Kpbs",
  })
  @get()
  static getKpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpb",
  })
  @post("{id}")
  static createKpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
