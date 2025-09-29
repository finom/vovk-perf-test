import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdks")
export default class KdkController {
  @operation({
    summary: "Get Kdks",
  })
  @get()
  static getKdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdk",
  })
  @post("{id}")
  static createKdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
