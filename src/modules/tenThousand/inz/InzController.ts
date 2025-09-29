import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inzs")
export default class InzController {
  @operation({
    summary: "Get Inzs",
  })
  @get()
  static getInzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inz",
  })
  @post("{id}")
  static createInz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
