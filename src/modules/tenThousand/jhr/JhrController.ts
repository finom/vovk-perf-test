import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhrs")
export default class JhrController {
  @operation({
    summary: "Get Jhrs",
  })
  @get()
  static getJhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhr",
  })
  @post("{id}")
  static createJhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
