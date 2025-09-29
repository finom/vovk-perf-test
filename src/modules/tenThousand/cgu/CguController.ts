import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgus")
export default class CguController {
  @operation({
    summary: "Get Cgus",
  })
  @get()
  static getCgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgu",
  })
  @post("{id}")
  static createCgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
