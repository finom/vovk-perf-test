import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iches")
export default class IchController {
  @operation({
    summary: "Get Iches",
  })
  @get()
  static getIches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ich",
  })
  @post("{id}")
  static createIch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
