import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncls")
export default class NclController {
  @operation({
    summary: "Get Ncls",
  })
  @get()
  static getNcls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncl",
  })
  @post("{id}")
  static createNcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
