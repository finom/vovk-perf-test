import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mygs")
export default class MygController {
  @operation({
    summary: "Get Mygs",
  })
  @get()
  static getMygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myg",
  })
  @post("{id}")
  static createMyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
