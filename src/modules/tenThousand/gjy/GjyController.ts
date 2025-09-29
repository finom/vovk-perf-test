import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjies")
export default class GjyController {
  @operation({
    summary: "Get Gjies",
  })
  @get()
  static getGjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjy",
  })
  @post("{id}")
  static createGjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
