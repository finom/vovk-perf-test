import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzms")
export default class HzmController {
  @operation({
    summary: "Get Hzms",
  })
  @get()
  static getHzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzm",
  })
  @post("{id}")
  static createHzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
