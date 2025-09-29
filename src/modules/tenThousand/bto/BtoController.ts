import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btos")
export default class BtoController {
  @operation({
    summary: "Get Btos",
  })
  @get()
  static getBtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bto",
  })
  @post("{id}")
  static createBto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
