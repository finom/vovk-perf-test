import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axks")
export default class AxkController {
  @operation({
    summary: "Get Axks",
  })
  @get()
  static getAxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axk",
  })
  @post("{id}")
  static createAxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
