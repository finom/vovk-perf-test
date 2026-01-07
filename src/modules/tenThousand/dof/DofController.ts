import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dof")
export default class DofController {
  @operation({
    summary: "Get Dof",
  })
  @get()
  static getDof = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dof",
  })
  @post("{id}")
  static createDof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
