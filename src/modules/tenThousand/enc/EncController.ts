import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("encs")
export default class EncController {
  @operation({
    summary: "Get Encs",
  })
  @get()
  static getEncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enc",
  })
  @post("{id}")
  static createEnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
