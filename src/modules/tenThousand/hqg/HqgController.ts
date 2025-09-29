import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqgs")
export default class HqgController {
  @operation({
    summary: "Get Hqgs",
  })
  @get()
  static getHqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqg",
  })
  @post("{id}")
  static createHqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
