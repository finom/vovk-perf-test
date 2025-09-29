import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhzs")
export default class JhzController {
  @operation({
    summary: "Get Jhzs",
  })
  @get()
  static getJhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhz",
  })
  @post("{id}")
  static createJhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
