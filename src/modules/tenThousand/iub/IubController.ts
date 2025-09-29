import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iubs")
export default class IubController {
  @operation({
    summary: "Get Iubs",
  })
  @get()
  static getIubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iub",
  })
  @post("{id}")
  static createIub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
