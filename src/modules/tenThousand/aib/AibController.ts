import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aibs")
export default class AibController {
  @operation({
    summary: "Get Aibs",
  })
  @get()
  static getAibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aib",
  })
  @post("{id}")
  static createAib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
