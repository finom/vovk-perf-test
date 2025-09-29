import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("its")
export default class ItsController {
  @operation({
    summary: "Get Its",
  })
  @get()
  static getIts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Its",
  })
  @post("{id}")
  static createIts = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
