import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exs")
export default class ExsController {
  @operation({
    summary: "Get Exs",
  })
  @get()
  static getExs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exs",
  })
  @post("{id}")
  static createExs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
