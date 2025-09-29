import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahms")
export default class AhmController {
  @operation({
    summary: "Get Ahms",
  })
  @get()
  static getAhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahm",
  })
  @post("{id}")
  static createAhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
