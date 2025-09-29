import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjds")
export default class CjdController {
  @operation({
    summary: "Get Cjds",
  })
  @get()
  static getCjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjd",
  })
  @post("{id}")
  static createCjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
