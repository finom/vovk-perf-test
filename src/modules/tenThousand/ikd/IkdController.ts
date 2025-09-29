import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikds")
export default class IkdController {
  @operation({
    summary: "Get Ikds",
  })
  @get()
  static getIkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikd",
  })
  @post("{id}")
  static createIkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
