import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ius")
export default class IuController {
  @operation({
    summary: "Get Ius",
  })
  @get()
  static getIus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iu",
  })
  @post("{id}")
  static createIu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
