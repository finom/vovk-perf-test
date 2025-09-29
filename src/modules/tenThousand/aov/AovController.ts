import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aovs")
export default class AovController {
  @operation({
    summary: "Get Aovs",
  })
  @get()
  static getAovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aov",
  })
  @post("{id}")
  static createAov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
