import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htrs")
export default class HtrController {
  @operation({
    summary: "Get Htrs",
  })
  @get()
  static getHtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htr",
  })
  @post("{id}")
  static createHtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
