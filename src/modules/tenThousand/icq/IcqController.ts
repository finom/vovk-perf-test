import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icqs")
export default class IcqController {
  @operation({
    summary: "Get Icqs",
  })
  @get()
  static getIcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icq",
  })
  @post("{id}")
  static createIcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
