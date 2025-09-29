import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amcs")
export default class AmcController {
  @operation({
    summary: "Get Amcs",
  })
  @get()
  static getAmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amc",
  })
  @post("{id}")
  static createAmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
