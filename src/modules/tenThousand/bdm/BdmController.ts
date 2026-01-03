import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdms")
export default class BdmController {
  @operation({
    summary: "Get Bdms",
  })
  @get()
  static getBdms = procedure({
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
