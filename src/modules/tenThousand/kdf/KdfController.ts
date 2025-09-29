import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdfs")
export default class KdfController {
  @operation({
    summary: "Get Kdfs",
  })
  @get()
  static getKdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdf",
  })
  @post("{id}")
  static createKdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
