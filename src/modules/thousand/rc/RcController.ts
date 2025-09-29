import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rcs")
export default class RcController {
  @operation({
    summary: "Get Rcs",
  })
  @get()
  static getRcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rc",
  })
  @post("{id}")
  static createRc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
