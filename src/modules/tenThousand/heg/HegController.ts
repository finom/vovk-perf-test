import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hegs")
export default class HegController {
  @operation({
    summary: "Get Hegs",
  })
  @get()
  static getHegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Heg",
  })
  @post("{id}")
  static createHeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
