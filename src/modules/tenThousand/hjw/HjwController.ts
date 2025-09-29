import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjws")
export default class HjwController {
  @operation({
    summary: "Get Hjws",
  })
  @get()
  static getHjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjw",
  })
  @post("{id}")
  static createHjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
