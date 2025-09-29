import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjies")
export default class KjyController {
  @operation({
    summary: "Get Kjies",
  })
  @get()
  static getKjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjy",
  })
  @post("{id}")
  static createKjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
