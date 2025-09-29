import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cors")
export default class CorController {
  @operation({
    summary: "Get Cors",
  })
  @get()
  static getCors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cor",
  })
  @post("{id}")
  static createCor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
