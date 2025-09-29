import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blxes")
export default class BlxController {
  @operation({
    summary: "Get Blxes",
  })
  @get()
  static getBlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blx",
  })
  @post("{id}")
  static createBlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
