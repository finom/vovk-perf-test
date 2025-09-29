import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyts")
export default class CytController {
  @operation({
    summary: "Get Cyts",
  })
  @get()
  static getCyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyt",
  })
  @post("{id}")
  static createCyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
