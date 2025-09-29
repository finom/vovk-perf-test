import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhns")
export default class JhnController {
  @operation({
    summary: "Get Jhns",
  })
  @get()
  static getJhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhn",
  })
  @post("{id}")
  static createJhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
