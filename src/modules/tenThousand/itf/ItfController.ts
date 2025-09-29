import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itfs")
export default class ItfController {
  @operation({
    summary: "Get Itfs",
  })
  @get()
  static getItfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itf",
  })
  @post("{id}")
  static createItf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
