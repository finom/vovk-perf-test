import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdls")
export default class HdlController {
  @operation({
    summary: "Get Hdls",
  })
  @get()
  static getHdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdl",
  })
  @post("{id}")
  static createHdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
