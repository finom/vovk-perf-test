import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iens")
export default class IenController {
  @operation({
    summary: "Get Iens",
  })
  @get()
  static getIens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ien",
  })
  @post("{id}")
  static createIen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
