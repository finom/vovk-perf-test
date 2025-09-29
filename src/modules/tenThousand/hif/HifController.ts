import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hifs")
export default class HifController {
  @operation({
    summary: "Get Hifs",
  })
  @get()
  static getHifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hif",
  })
  @post("{id}")
  static createHif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
