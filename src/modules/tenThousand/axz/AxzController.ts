import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axzs")
export default class AxzController {
  @operation({
    summary: "Get Axzs",
  })
  @get()
  static getAxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axz",
  })
  @post("{id}")
  static createAxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
