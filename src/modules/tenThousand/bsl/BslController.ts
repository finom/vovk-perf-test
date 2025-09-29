import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsls")
export default class BslController {
  @operation({
    summary: "Get Bsls",
  })
  @get()
  static getBsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsl",
  })
  @post("{id}")
  static createBsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
