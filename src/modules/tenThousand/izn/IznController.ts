import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izns")
export default class IznController {
  @operation({
    summary: "Get Izns",
  })
  @get()
  static getIzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izn",
  })
  @post("{id}")
  static createIzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
