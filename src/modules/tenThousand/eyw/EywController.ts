import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyws")
export default class EywController {
  @operation({
    summary: "Get Eyws",
  })
  @get()
  static getEyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyw",
  })
  @post("{id}")
  static createEyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
