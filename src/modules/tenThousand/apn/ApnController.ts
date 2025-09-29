import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apns")
export default class ApnController {
  @operation({
    summary: "Get Apns",
  })
  @get()
  static getApns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apn",
  })
  @post("{id}")
  static createApn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
