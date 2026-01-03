import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmies")
export default class GmyController {
  @operation({
    summary: "Get Gmies",
  })
  @get()
  static getGmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmy",
  })
  @post("{id}")
  static createGmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
