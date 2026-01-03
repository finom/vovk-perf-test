import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jacs")
export default class JacController {
  @operation({
    summary: "Get Jacs",
  })
  @get()
  static getJacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jac",
  })
  @post("{id}")
  static createJac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
