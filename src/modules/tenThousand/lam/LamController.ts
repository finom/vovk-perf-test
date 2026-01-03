import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lams")
export default class LamController {
  @operation({
    summary: "Get Lams",
  })
  @get()
  static getLams = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lam",
  })
  @post("{id}")
  static createLam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
