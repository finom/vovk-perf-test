import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abcs")
export default class AbcController {
  @operation({
    summary: "Get Abcs",
  })
  @get()
  static getAbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abc",
  })
  @post("{id}")
  static createAbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
