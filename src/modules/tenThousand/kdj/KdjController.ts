import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdjs")
export default class KdjController {
  @operation({
    summary: "Get Kdjs",
  })
  @get()
  static getKdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdj",
  })
  @post("{id}")
  static createKdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
