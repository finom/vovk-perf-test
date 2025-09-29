import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxfs")
export default class JxfController {
  @operation({
    summary: "Get Jxfs",
  })
  @get()
  static getJxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxf",
  })
  @post("{id}")
  static createJxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
