import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktks")
export default class KtkController {
  @operation({
    summary: "Get Ktks",
  })
  @get()
  static getKtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktk",
  })
  @post("{id}")
  static createKtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
