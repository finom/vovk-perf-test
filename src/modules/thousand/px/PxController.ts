import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pxes")
export default class PxController {
  @operation({
    summary: "Get Pxes",
  })
  @get()
  static getPxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Px",
  })
  @post("{id}")
  static createPx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
