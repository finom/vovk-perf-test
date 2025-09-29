import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axs")
export default class AxsController {
  @operation({
    summary: "Get Axs",
  })
  @get()
  static getAxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axs",
  })
  @post("{id}")
  static createAxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
