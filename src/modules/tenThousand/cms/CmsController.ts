import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cms")
export default class CmsController {
  @operation({
    summary: "Get Cms",
  })
  @get()
  static getCms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cms",
  })
  @post("{id}")
  static createCms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
