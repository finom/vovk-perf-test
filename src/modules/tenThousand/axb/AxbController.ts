import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axbs")
export default class AxbController {
  @operation({
    summary: "Get Axbs",
  })
  @get()
  static getAxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axb",
  })
  @post("{id}")
  static createAxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
