import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdcs")
export default class HdcController {
  @operation({
    summary: "Get Hdcs",
  })
  @get()
  static getHdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdc",
  })
  @post("{id}")
  static createHdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
