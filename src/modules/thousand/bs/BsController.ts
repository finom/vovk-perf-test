import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bs")
export default class BsController {
  @operation({
    summary: "Get Bs",
  })
  @get()
  static getBs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bs",
  })
  @post("{id}")
  static createBs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
