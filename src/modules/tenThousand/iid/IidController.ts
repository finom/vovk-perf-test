import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iids")
export default class IidController {
  @operation({
    summary: "Get Iids",
  })
  @get()
  static getIids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iid",
  })
  @post("{id}")
  static createIid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
