import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivies")
export default class IvyController {
  @operation({
    summary: "Get Ivies",
  })
  @get()
  static getIvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivy",
  })
  @post("{id}")
  static createIvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
