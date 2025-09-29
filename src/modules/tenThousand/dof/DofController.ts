import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dofs")
export default class DofController {
  @operation({
    summary: "Get Dofs",
  })
  @get()
  static getDofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dof",
  })
  @post("{id}")
  static createDof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
