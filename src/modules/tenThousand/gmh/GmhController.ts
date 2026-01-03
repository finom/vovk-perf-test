import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmhs")
export default class GmhController {
  @operation({
    summary: "Get Gmhs",
  })
  @get()
  static getGmhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmh",
  })
  @post("{id}")
  static createGmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
