import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xds")
export default class XdController {
  @operation({
    summary: "Get Xds",
  })
  @get()
  static getXds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xd",
  })
  @post("{id}")
  static createXd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
