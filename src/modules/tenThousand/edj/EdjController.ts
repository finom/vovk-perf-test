import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edjs")
export default class EdjController {
  @operation({
    summary: "Get Edjs",
  })
  @get()
  static getEdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edj",
  })
  @post("{id}")
  static createEdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
