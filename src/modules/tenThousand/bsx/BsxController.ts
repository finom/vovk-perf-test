import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsxes")
export default class BsxController {
  @operation({
    summary: "Get Bsxes",
  })
  @get()
  static getBsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsx",
  })
  @post("{id}")
  static createBsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
