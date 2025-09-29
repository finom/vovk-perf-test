import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvps")
export default class DvpController {
  @operation({
    summary: "Get Dvps",
  })
  @get()
  static getDvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvp",
  })
  @post("{id}")
  static createDvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
