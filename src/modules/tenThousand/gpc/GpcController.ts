import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpcs")
export default class GpcController {
  @operation({
    summary: "Get Gpcs",
  })
  @get()
  static getGpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpc",
  })
  @post("{id}")
  static createGpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
