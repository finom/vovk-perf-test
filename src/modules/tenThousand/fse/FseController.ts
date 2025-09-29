import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fses")
export default class FseController {
  @operation({
    summary: "Get Fses",
  })
  @get()
  static getFses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fse",
  })
  @post("{id}")
  static createFse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
