import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axgs")
export default class AxgController {
  @operation({
    summary: "Get Axgs",
  })
  @get()
  static getAxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axg",
  })
  @post("{id}")
  static createAxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
