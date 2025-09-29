import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmies")
export default class HmyController {
  @operation({
    summary: "Get Hmies",
  })
  @get()
  static getHmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmy",
  })
  @post("{id}")
  static createHmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
