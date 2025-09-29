import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxfs")
export default class HxfController {
  @operation({
    summary: "Get Hxfs",
  })
  @get()
  static getHxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxf",
  })
  @post("{id}")
  static createHxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
