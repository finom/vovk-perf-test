import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("news")
export default class NewController {
  @operation({
    summary: "Get News",
  })
  @get()
  static getNews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create New",
  })
  @post("{id}")
  static createNew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
