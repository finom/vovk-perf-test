import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjies")
export default class HjyController {
  @operation({
    summary: "Get Hjies",
  })
  @get()
  static getHjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjy",
  })
  @post("{id}")
  static createHjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
