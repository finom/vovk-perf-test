import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbies")
export default class GbyController {
  @operation({
    summary: "Get Gbies",
  })
  @get()
  static getGbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gby",
  })
  @post("{id}")
  static createGby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
