import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ws")
export default class WsController {
  @operation({
    summary: "Get Ws",
  })
  @get()
  static getWs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ws",
  })
  @post("{id}")
  static createWs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
