import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xcs")
export default class XcController {
  @operation({
    summary: "Get Xcs",
  })
  @get()
  static getXcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xc",
  })
  @post("{id}")
  static createXc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
