import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjrs")
export default class GjrController {
  @operation({
    summary: "Get Gjrs",
  })
  @get()
  static getGjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjr",
  })
  @post("{id}")
  static createGjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
