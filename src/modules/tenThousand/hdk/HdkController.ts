import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdks")
export default class HdkController {
  @operation({
    summary: "Get Hdks",
  })
  @get()
  static getHdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdk",
  })
  @post("{id}")
  static createHdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
