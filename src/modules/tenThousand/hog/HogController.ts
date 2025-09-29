import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hogs")
export default class HogController {
  @operation({
    summary: "Get Hogs",
  })
  @get()
  static getHogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hog",
  })
  @post("{id}")
  static createHog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
