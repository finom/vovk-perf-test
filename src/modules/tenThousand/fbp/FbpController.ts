import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbps")
export default class FbpController {
  @operation({
    summary: "Get Fbps",
  })
  @get()
  static getFbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbp",
  })
  @post("{id}")
  static createFbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
