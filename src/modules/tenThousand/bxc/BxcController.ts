import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxcs")
export default class BxcController {
  @operation({
    summary: "Get Bxcs",
  })
  @get()
  static getBxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxc",
  })
  @post("{id}")
  static createBxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
