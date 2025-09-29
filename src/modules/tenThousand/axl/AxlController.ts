import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axls")
export default class AxlController {
  @operation({
    summary: "Get Axls",
  })
  @get()
  static getAxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axl",
  })
  @post("{id}")
  static createAxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
