import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwes")
export default class FweController {
  @operation({
    summary: "Get Fwes",
  })
  @get()
  static getFwes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwe",
  })
  @post("{id}")
  static createFwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
