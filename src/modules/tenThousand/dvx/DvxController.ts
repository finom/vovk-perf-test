import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvxes")
export default class DvxController {
  @operation({
    summary: "Get Dvxes",
  })
  @get()
  static getDvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvx",
  })
  @post("{id}")
  static createDvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
