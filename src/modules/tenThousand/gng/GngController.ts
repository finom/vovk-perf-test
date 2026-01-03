import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gngs")
export default class GngController {
  @operation({
    summary: "Get Gngs",
  })
  @get()
  static getGngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gng",
  })
  @post("{id}")
  static createGng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
