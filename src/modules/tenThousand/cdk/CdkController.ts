import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdks")
export default class CdkController {
  @operation({
    summary: "Get Cdks",
  })
  @get()
  static getCdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdk",
  })
  @post("{id}")
  static createCdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
