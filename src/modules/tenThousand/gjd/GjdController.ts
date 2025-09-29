import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjds")
export default class GjdController {
  @operation({
    summary: "Get Gjds",
  })
  @get()
  static getGjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjd",
  })
  @post("{id}")
  static createGjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
