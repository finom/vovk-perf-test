import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glus")
export default class GluController {
  @operation({
    summary: "Get Glus",
  })
  @get()
  static getGlus = procedure({
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
