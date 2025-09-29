import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifjs")
export default class IfjController {
  @operation({
    summary: "Get Ifjs",
  })
  @get()
  static getIfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifj",
  })
  @post("{id}")
  static createIfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
