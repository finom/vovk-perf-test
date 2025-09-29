import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixes")
export default class IxController {
  @operation({
    summary: "Get Ixes",
  })
  @get()
  static getIxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ix",
  })
  @post("{id}")
  static createIx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
