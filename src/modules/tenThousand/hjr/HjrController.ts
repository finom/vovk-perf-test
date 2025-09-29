import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjrs")
export default class HjrController {
  @operation({
    summary: "Get Hjrs",
  })
  @get()
  static getHjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjr",
  })
  @post("{id}")
  static createHjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
