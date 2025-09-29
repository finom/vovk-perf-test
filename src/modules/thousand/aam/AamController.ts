import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aams")
export default class AamController {
  @operation({
    summary: "Get Aams",
  })
  @get()
  static getAams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aam",
  })
  @post("{id}")
  static createAam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
