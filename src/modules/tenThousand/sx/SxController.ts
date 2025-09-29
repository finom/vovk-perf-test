import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sxes")
export default class SxController {
  @operation({
    summary: "Get Sxes",
  })
  @get()
  static getSxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sx",
  })
  @post("{id}")
  static createSx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
