import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxfs")
export default class CxfController {
  @operation({
    summary: "Get Cxfs",
  })
  @get()
  static getCxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxf",
  })
  @post("{id}")
  static createCxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
