import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njos")
export default class NjoController {
  @operation({
    summary: "Get Njos",
  })
  @get()
  static getNjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njo",
  })
  @post("{id}")
  static createNjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
