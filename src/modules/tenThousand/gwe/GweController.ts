import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwe")
export default class GweController {
  @operation({
    summary: "Get Gwe",
  })
  @get()
  static getGwe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwe",
  })
  @post("{id}")
  static createGwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
