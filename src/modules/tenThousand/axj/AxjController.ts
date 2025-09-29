import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axjs")
export default class AxjController {
  @operation({
    summary: "Get Axjs",
  })
  @get()
  static getAxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axj",
  })
  @post("{id}")
  static createAxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
