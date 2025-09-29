import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msjs")
export default class MsjController {
  @operation({
    summary: "Get Msjs",
  })
  @get()
  static getMsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msj",
  })
  @post("{id}")
  static createMsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
