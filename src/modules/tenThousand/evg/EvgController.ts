import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evgs")
export default class EvgController {
  @operation({
    summary: "Get Evgs",
  })
  @get()
  static getEvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evg",
  })
  @post("{id}")
  static createEvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
