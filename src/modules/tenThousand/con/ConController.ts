import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cons")
export default class ConController {
  @operation({
    summary: "Get Cons",
  })
  @get()
  static getCons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Con",
  })
  @post("{id}")
  static createCon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
