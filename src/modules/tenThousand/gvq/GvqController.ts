import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvq")
export default class GvqController {
  @operation({
    summary: "Get Gvq",
  })
  @get()
  static getGvq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvq",
  })
  @post("{id}")
  static createGvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
