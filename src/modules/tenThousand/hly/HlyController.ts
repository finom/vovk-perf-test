import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlies")
export default class HlyController {
  @operation({
    summary: "Get Hlies",
  })
  @get()
  static getHlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hly",
  })
  @post("{id}")
  static createHly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
