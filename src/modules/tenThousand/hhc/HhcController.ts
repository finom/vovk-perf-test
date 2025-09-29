import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhcs")
export default class HhcController {
  @operation({
    summary: "Get Hhcs",
  })
  @get()
  static getHhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhc",
  })
  @post("{id}")
  static createHhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
