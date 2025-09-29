import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inls")
export default class InlController {
  @operation({
    summary: "Get Inls",
  })
  @get()
  static getInls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inl",
  })
  @post("{id}")
  static createInl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
