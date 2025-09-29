import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqms")
export default class HqmController {
  @operation({
    summary: "Get Hqms",
  })
  @get()
  static getHqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqm",
  })
  @post("{id}")
  static createHqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
