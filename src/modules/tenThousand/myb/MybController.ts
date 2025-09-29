import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mybs")
export default class MybController {
  @operation({
    summary: "Get Mybs",
  })
  @get()
  static getMybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myb",
  })
  @post("{id}")
  static createMyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
