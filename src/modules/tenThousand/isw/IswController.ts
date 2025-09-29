import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isws")
export default class IswController {
  @operation({
    summary: "Get Isws",
  })
  @get()
  static getIsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isw",
  })
  @post("{id}")
  static createIsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
