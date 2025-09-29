import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kms")
export default class KmsController {
  @operation({
    summary: "Get Kms",
  })
  @get()
  static getKms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kms",
  })
  @post("{id}")
  static createKms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
