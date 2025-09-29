import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjgs")
export default class GjgController {
  @operation({
    summary: "Get Gjgs",
  })
  @get()
  static getGjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjg",
  })
  @post("{id}")
  static createGjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
