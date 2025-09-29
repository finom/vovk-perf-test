import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdxes")
export default class FdxController {
  @operation({
    summary: "Get Fdxes",
  })
  @get()
  static getFdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdx",
  })
  @post("{id}")
  static createFdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
