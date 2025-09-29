import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idjs")
export default class IdjController {
  @operation({
    summary: "Get Idjs",
  })
  @get()
  static getIdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idj",
  })
  @post("{id}")
  static createIdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
