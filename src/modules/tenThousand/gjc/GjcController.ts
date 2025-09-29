import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjcs")
export default class GjcController {
  @operation({
    summary: "Get Gjcs",
  })
  @get()
  static getGjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjc",
  })
  @post("{id}")
  static createGjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
