import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edps")
export default class EdpController {
  @operation({
    summary: "Get Edps",
  })
  @get()
  static getEdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edp",
  })
  @post("{id}")
  static createEdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
