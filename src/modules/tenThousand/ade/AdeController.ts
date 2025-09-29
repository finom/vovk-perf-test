import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ades")
export default class AdeController {
  @operation({
    summary: "Get Ades",
  })
  @get()
  static getAdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ade",
  })
  @post("{id}")
  static createAde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
