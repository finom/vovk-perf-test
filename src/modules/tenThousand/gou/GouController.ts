import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gou")
export default class GouController {
  @operation({
    summary: "Get Gou",
  })
  @get()
  static getGou = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gou",
  })
  @post("{id}")
  static createGou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
