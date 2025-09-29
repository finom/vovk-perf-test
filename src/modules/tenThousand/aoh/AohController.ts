import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aohs")
export default class AohController {
  @operation({
    summary: "Get Aohs",
  })
  @get()
  static getAohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoh",
  })
  @post("{id}")
  static createAoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
