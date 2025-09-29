import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkns")
export default class MknController {
  @operation({
    summary: "Get Mkns",
  })
  @get()
  static getMkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkn",
  })
  @post("{id}")
  static createMkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
