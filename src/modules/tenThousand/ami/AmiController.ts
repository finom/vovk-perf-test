import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amis")
export default class AmiController {
  @operation({
    summary: "Get Amis",
  })
  @get()
  static getAmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ami",
  })
  @post("{id}")
  static createAmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
