import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrts")
export default class HrtController {
  @operation({
    summary: "Get Hrts",
  })
  @get()
  static getHrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrt",
  })
  @post("{id}")
  static createHrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
