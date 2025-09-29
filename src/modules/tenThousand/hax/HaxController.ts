import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("haxes")
export default class HaxController {
  @operation({
    summary: "Get Haxes",
  })
  @get()
  static getHaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hax",
  })
  @post("{id}")
  static createHax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
