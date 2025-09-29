import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lips")
export default class LipController {
  @operation({
    summary: "Get Lips",
  })
  @get()
  static getLips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lip",
  })
  @post("{id}")
  static createLip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
