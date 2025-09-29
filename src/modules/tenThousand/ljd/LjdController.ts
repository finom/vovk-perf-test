import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljds")
export default class LjdController {
  @operation({
    summary: "Get Ljds",
  })
  @get()
  static getLjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljd",
  })
  @post("{id}")
  static createLjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
