import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axvs")
export default class AxvController {
  @operation({
    summary: "Get Axvs",
  })
  @get()
  static getAxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axv",
  })
  @post("{id}")
  static createAxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
