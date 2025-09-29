import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iaus")
export default class IauController {
  @operation({
    summary: "Get Iaus",
  })
  @get()
  static getIaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iau",
  })
  @post("{id}")
  static createIau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
