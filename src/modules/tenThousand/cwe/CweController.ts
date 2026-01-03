import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwes")
export default class CweController {
  @operation({
    summary: "Get Cwes",
  })
  @get()
  static getCwes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwe",
  })
  @post("{id}")
  static createCwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
