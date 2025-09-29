import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibxes")
export default class IbxController {
  @operation({
    summary: "Get Ibxes",
  })
  @get()
  static getIbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibx",
  })
  @post("{id}")
  static createIbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
