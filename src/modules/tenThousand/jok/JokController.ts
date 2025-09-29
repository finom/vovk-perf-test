import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("joks")
export default class JokController {
  @operation({
    summary: "Get Joks",
  })
  @get()
  static getJoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jok",
  })
  @post("{id}")
  static createJok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
