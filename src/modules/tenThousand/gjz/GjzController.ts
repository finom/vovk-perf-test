import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjzs")
export default class GjzController {
  @operation({
    summary: "Get Gjzs",
  })
  @get()
  static getGjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjz",
  })
  @post("{id}")
  static createGjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
