import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkps")
export default class KkpController {
  @operation({
    summary: "Get Kkps",
  })
  @get()
  static getKkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkp",
  })
  @post("{id}")
  static createKkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
