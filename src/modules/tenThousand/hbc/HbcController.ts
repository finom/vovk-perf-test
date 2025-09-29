import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbcs")
export default class HbcController {
  @operation({
    summary: "Get Hbcs",
  })
  @get()
  static getHbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbc",
  })
  @post("{id}")
  static createHbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
