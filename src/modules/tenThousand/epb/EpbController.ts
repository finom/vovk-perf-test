import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epbs")
export default class EpbController {
  @operation({
    summary: "Get Epbs",
  })
  @get()
  static getEpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epb",
  })
  @post("{id}")
  static createEpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
