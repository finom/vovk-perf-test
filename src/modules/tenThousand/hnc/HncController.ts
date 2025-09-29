import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hncs")
export default class HncController {
  @operation({
    summary: "Get Hncs",
  })
  @get()
  static getHncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnc",
  })
  @post("{id}")
  static createHnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
