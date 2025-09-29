import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxfs")
export default class GxfController {
  @operation({
    summary: "Get Gxfs",
  })
  @get()
  static getGxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxf",
  })
  @post("{id}")
  static createGxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
