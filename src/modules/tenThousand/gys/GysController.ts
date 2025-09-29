import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gys")
export default class GysController {
  @operation({
    summary: "Get Gys",
  })
  @get()
  static getGys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gys",
  })
  @post("{id}")
  static createGys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
