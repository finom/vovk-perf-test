import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bffs")
export default class BffController {
  @operation({
    summary: "Get Bffs",
  })
  @get()
  static getBffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bff",
  })
  @post("{id}")
  static createBff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
