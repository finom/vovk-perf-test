import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axrs")
export default class AxrController {
  @operation({
    summary: "Get Axrs",
  })
  @get()
  static getAxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axr",
  })
  @post("{id}")
  static createAxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
