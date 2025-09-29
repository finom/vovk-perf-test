import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hods")
export default class HodController {
  @operation({
    summary: "Get Hods",
  })
  @get()
  static getHods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hod",
  })
  @post("{id}")
  static createHod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
