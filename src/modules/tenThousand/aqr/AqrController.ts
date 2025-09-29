import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqrs")
export default class AqrController {
  @operation({
    summary: "Get Aqrs",
  })
  @get()
  static getAqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqr",
  })
  @post("{id}")
  static createAqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
