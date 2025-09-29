import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjhs")
export default class HjhController {
  @operation({
    summary: "Get Hjhs",
  })
  @get()
  static getHjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjh",
  })
  @post("{id}")
  static createHjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
