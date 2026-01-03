import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awes")
export default class AweController {
  @operation({
    summary: "Get Awes",
  })
  @get()
  static getAwes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awe",
  })
  @post("{id}")
  static createAwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
