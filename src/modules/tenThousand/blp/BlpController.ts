import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blps")
export default class BlpController {
  @operation({
    summary: "Get Blps",
  })
  @get()
  static getBlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blp",
  })
  @post("{id}")
  static createBlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
