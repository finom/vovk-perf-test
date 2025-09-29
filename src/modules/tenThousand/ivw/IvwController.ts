import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivws")
export default class IvwController {
  @operation({
    summary: "Get Ivws",
  })
  @get()
  static getIvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivw",
  })
  @post("{id}")
  static createIvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
