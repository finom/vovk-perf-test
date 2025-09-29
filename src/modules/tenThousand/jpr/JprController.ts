import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jprs")
export default class JprController {
  @operation({
    summary: "Get Jprs",
  })
  @get()
  static getJprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpr",
  })
  @post("{id}")
  static createJpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
