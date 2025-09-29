import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddks")
export default class DdkController {
  @operation({
    summary: "Get Ddks",
  })
  @get()
  static getDdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddk",
  })
  @post("{id}")
  static createDdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
