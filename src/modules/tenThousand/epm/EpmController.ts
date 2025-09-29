import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epms")
export default class EpmController {
  @operation({
    summary: "Get Epms",
  })
  @get()
  static getEpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epm",
  })
  @post("{id}")
  static createEpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
