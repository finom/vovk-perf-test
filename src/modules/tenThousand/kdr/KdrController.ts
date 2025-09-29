import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdrs")
export default class KdrController {
  @operation({
    summary: "Get Kdrs",
  })
  @get()
  static getKdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdr",
  })
  @post("{id}")
  static createKdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
