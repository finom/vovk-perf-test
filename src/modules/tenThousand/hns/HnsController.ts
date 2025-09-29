import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hns")
export default class HnsController {
  @operation({
    summary: "Get Hns",
  })
  @get()
  static getHns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hns",
  })
  @post("{id}")
  static createHns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
