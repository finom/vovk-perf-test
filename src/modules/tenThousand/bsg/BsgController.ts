import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsgs")
export default class BsgController {
  @operation({
    summary: "Get Bsgs",
  })
  @get()
  static getBsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsg",
  })
  @post("{id}")
  static createBsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
