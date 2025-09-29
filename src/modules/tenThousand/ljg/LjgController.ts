import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljgs")
export default class LjgController {
  @operation({
    summary: "Get Ljgs",
  })
  @get()
  static getLjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljg",
  })
  @post("{id}")
  static createLjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
