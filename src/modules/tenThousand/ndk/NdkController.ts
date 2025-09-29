import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndks")
export default class NdkController {
  @operation({
    summary: "Get Ndks",
  })
  @get()
  static getNdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndk",
  })
  @post("{id}")
  static createNdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
