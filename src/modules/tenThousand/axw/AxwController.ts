import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axws")
export default class AxwController {
  @operation({
    summary: "Get Axws",
  })
  @get()
  static getAxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axw",
  })
  @post("{id}")
  static createAxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
