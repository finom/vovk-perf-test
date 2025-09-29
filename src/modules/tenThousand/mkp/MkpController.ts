import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkps")
export default class MkpController {
  @operation({
    summary: "Get Mkps",
  })
  @get()
  static getMkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkp",
  })
  @post("{id}")
  static createMkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
