import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilks")
export default class IlkController {
  @operation({
    summary: "Get Ilks",
  })
  @get()
  static getIlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilk",
  })
  @post("{id}")
  static createIlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
