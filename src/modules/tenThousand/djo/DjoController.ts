import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djos")
export default class DjoController {
  @operation({
    summary: "Get Djos",
  })
  @get()
  static getDjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djo",
  })
  @post("{id}")
  static createDjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
