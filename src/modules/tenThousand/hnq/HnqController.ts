import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnqs")
export default class HnqController {
  @operation({
    summary: "Get Hnqs",
  })
  @get()
  static getHnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnq",
  })
  @post("{id}")
  static createHnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
