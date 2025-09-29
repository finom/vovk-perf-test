import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iews")
export default class IewController {
  @operation({
    summary: "Get Iews",
  })
  @get()
  static getIews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iew",
  })
  @post("{id}")
  static createIew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
