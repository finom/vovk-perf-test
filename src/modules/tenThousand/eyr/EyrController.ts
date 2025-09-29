import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyrs")
export default class EyrController {
  @operation({
    summary: "Get Eyrs",
  })
  @get()
  static getEyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyr",
  })
  @post("{id}")
  static createEyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
