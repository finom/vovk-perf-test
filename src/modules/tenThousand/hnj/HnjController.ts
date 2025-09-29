import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnjs")
export default class HnjController {
  @operation({
    summary: "Get Hnjs",
  })
  @get()
  static getHnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnj",
  })
  @post("{id}")
  static createHnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
