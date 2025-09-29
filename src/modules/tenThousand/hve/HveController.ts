import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hves")
export default class HveController {
  @operation({
    summary: "Get Hves",
  })
  @get()
  static getHves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hve",
  })
  @post("{id}")
  static createHve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
