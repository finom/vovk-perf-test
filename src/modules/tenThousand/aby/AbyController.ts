import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abies")
export default class AbyController {
  @operation({
    summary: "Get Abies",
  })
  @get()
  static getAbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aby",
  })
  @post("{id}")
  static createAby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
