import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwe")
export default class MweController {
  @operation({
    summary: "Get Mwe",
  })
  @get()
  static getMwe = procedure({
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
