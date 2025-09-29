import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezis")
export default class EziController {
  @operation({
    summary: "Get Ezis",
  })
  @get()
  static getEzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezi",
  })
  @post("{id}")
  static createEzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
