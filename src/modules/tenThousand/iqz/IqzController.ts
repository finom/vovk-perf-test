import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqzs")
export default class IqzController {
  @operation({
    summary: "Get Iqzs",
  })
  @get()
  static getIqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqz",
  })
  @post("{id}")
  static createIqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
