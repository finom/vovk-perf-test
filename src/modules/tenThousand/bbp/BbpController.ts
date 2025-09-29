import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbps")
export default class BbpController {
  @operation({
    summary: "Get Bbps",
  })
  @get()
  static getBbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbp",
  })
  @post("{id}")
  static createBbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
