import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdm")
export default class BdmController {
  @operation({
    summary: "Get Bdm",
  })
  @get()
  static getBdm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdm",
  })
  @post("{id}")
  static createBdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
