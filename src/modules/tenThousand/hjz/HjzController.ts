import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjzs")
export default class HjzController {
  @operation({
    summary: "Get Hjzs",
  })
  @get()
  static getHjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjz",
  })
  @post("{id}")
  static createHjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
