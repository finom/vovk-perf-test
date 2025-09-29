import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdhs")
export default class HdhController {
  @operation({
    summary: "Get Hdhs",
  })
  @get()
  static getHdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdh",
  })
  @post("{id}")
  static createHdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
