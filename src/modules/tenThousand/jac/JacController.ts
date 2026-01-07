import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jac")
export default class JacController {
  @operation({
    summary: "Get Jac",
  })
  @get()
  static getJac = procedure({
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
