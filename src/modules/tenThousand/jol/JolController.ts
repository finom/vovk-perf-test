import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jols")
export default class JolController {
  @operation({
    summary: "Get Jols",
  })
  @get()
  static getJols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jol",
  })
  @post("{id}")
  static createJol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
