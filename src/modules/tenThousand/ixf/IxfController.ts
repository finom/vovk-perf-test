import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixfs")
export default class IxfController {
  @operation({
    summary: "Get Ixfs",
  })
  @get()
  static getIxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixf",
  })
  @post("{id}")
  static createIxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
