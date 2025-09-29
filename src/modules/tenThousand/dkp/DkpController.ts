import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkps")
export default class DkpController {
  @operation({
    summary: "Get Dkps",
  })
  @get()
  static getDkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkp",
  })
  @post("{id}")
  static createDkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
