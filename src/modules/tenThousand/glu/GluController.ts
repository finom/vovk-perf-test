import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glu")
export default class GluController {
  @operation({
    summary: "Get Glu",
  })
  @get()
  static getGlu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glu",
  })
  @post("{id}")
  static createGlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
