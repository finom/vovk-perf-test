import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pies")
export default class PyController {
  @operation({
    summary: "Get Pies",
  })
  @get()
  static getPies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Py",
  })
  @post("{id}")
  static createPy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
