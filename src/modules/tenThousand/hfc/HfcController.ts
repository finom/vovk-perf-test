import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfcs")
export default class HfcController {
  @operation({
    summary: "Get Hfcs",
  })
  @get()
  static getHfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfc",
  })
  @post("{id}")
  static createHfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
