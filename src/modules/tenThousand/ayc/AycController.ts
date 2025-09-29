import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aycs")
export default class AycController {
  @operation({
    summary: "Get Aycs",
  })
  @get()
  static getAycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayc",
  })
  @post("{id}")
  static createAyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
