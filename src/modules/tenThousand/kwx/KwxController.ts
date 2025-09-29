import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwxes")
export default class KwxController {
  @operation({
    summary: "Get Kwxes",
  })
  @get()
  static getKwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwx",
  })
  @post("{id}")
  static createKwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
