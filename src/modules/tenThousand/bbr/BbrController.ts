import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbrs")
export default class BbrController {
  @operation({
    summary: "Get Bbrs",
  })
  @get()
  static getBbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbr",
  })
  @post("{id}")
  static createBbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
