import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqs")
export default class IqController {
  @operation({
    summary: "Get Iqs",
  })
  @get()
  static getIqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iq",
  })
  @post("{id}")
  static createIq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
