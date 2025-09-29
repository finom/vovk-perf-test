import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgcs")
export default class CgcController {
  @operation({
    summary: "Get Cgcs",
  })
  @get()
  static getCgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgc",
  })
  @post("{id}")
  static createCgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
