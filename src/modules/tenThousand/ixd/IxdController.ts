import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixds")
export default class IxdController {
  @operation({
    summary: "Get Ixds",
  })
  @get()
  static getIxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixd",
  })
  @post("{id}")
  static createIxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
