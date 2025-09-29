import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ws")
export default class WController {
  @operation({
    summary: "Get WS",
  })
  @get()
  static getWS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create W",
  })
  @post("{id}")
  static createW = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
