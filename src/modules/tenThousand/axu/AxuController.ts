import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axus")
export default class AxuController {
  @operation({
    summary: "Get Axus",
  })
  @get()
  static getAxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axu",
  })
  @post("{id}")
  static createAxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
