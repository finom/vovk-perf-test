import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ts")
export default class TController {
  @operation({
    summary: "Get TS",
  })
  @get()
  static getTS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create T",
  })
  @post("{id}")
  static createT = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
