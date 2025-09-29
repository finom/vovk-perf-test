import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsjs")
export default class BsjController {
  @operation({
    summary: "Get Bsjs",
  })
  @get()
  static getBsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsj",
  })
  @post("{id}")
  static createBsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
