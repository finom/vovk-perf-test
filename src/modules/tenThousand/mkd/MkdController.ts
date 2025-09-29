import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkds")
export default class MkdController {
  @operation({
    summary: "Get Mkds",
  })
  @get()
  static getMkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkd",
  })
  @post("{id}")
  static createMkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
