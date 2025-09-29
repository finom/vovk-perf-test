import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbrs")
export default class GbrController {
  @operation({
    summary: "Get Gbrs",
  })
  @get()
  static getGbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbr",
  })
  @post("{id}")
  static createGbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
