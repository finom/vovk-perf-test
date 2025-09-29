import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdks")
export default class BdkController {
  @operation({
    summary: "Get Bdks",
  })
  @get()
  static getBdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdk",
  })
  @post("{id}")
  static createBdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
