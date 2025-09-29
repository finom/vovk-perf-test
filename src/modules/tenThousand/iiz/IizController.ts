import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iizs")
export default class IizController {
  @operation({
    summary: "Get Iizs",
  })
  @get()
  static getIizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iiz",
  })
  @post("{id}")
  static createIiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
