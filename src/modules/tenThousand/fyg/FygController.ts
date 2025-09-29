import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fygs")
export default class FygController {
  @operation({
    summary: "Get Fygs",
  })
  @get()
  static getFygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyg",
  })
  @post("{id}")
  static createFyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
