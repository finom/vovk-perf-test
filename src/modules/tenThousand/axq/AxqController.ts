import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axqs")
export default class AxqController {
  @operation({
    summary: "Get Axqs",
  })
  @get()
  static getAxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axq",
  })
  @post("{id}")
  static createAxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
