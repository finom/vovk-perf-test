import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvds")
export default class BvdController {
  @operation({
    summary: "Get Bvds",
  })
  @get()
  static getBvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvd",
  })
  @post("{id}")
  static createBvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
