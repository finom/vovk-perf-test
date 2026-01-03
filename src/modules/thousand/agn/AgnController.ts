import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agns")
export default class AgnController {
  @operation({
    summary: "Get Agns",
  })
  @get()
  static getAgns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agn",
  })
  @post("{id}")
  static createAgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
