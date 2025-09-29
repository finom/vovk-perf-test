import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hoqs")
export default class HoqController {
  @operation({
    summary: "Get Hoqs",
  })
  @get()
  static getHoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoq",
  })
  @post("{id}")
  static createHoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
