import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcms")
export default class FcmController {
  @operation({
    summary: "Get Fcms",
  })
  @get()
  static getFcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcm",
  })
  @post("{id}")
  static createFcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
