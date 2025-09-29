import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzis")
export default class HziController {
  @operation({
    summary: "Get Hzis",
  })
  @get()
  static getHzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzi",
  })
  @post("{id}")
  static createHzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
