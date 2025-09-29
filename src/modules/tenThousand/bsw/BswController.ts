import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsws")
export default class BswController {
  @operation({
    summary: "Get Bsws",
  })
  @get()
  static getBsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsw",
  })
  @post("{id}")
  static createBsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
