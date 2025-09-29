import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akxes")
export default class AkxController {
  @operation({
    summary: "Get Akxes",
  })
  @get()
  static getAkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akx",
  })
  @post("{id}")
  static createAkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
