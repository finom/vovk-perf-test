import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgjs")
export default class CgjController {
  @operation({
    summary: "Get Cgjs",
  })
  @get()
  static getCgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgj",
  })
  @post("{id}")
  static createCgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
