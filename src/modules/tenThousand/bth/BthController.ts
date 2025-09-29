import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bths")
export default class BthController {
  @operation({
    summary: "Get Bths",
  })
  @get()
  static getBths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bth",
  })
  @post("{id}")
  static createBth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
