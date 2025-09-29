import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsms")
export default class GsmController {
  @operation({
    summary: "Get Gsms",
  })
  @get()
  static getGsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsm",
  })
  @post("{id}")
  static createGsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
