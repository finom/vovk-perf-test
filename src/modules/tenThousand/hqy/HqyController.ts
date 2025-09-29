import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqies")
export default class HqyController {
  @operation({
    summary: "Get Hqies",
  })
  @get()
  static getHqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqy",
  })
  @post("{id}")
  static createHqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
