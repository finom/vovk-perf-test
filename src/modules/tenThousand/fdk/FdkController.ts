import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdks")
export default class FdkController {
  @operation({
    summary: "Get Fdks",
  })
  @get()
  static getFdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdk",
  })
  @post("{id}")
  static createFdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
