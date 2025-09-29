import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgls")
export default class CglController {
  @operation({
    summary: "Get Cgls",
  })
  @get()
  static getCgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgl",
  })
  @post("{id}")
  static createCgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
