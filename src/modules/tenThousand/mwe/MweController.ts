import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwes")
export default class MweController {
  @operation({
    summary: "Get Mwes",
  })
  @get()
  static getMwes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwe",
  })
  @post("{id}")
  static createMwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
