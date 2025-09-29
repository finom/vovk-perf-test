import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhhs")
export default class HhhController {
  @operation({
    summary: "Get Hhhs",
  })
  @get()
  static getHhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhh",
  })
  @post("{id}")
  static createHhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
