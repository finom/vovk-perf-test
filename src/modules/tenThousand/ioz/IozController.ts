import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iozs")
export default class IozController {
  @operation({
    summary: "Get Iozs",
  })
  @get()
  static getIozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioz",
  })
  @post("{id}")
  static createIoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
