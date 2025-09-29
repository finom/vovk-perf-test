import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aols")
export default class AolController {
  @operation({
    summary: "Get Aols",
  })
  @get()
  static getAols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aol",
  })
  @post("{id}")
  static createAol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
