import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gews")
export default class GewController {
  @operation({
    summary: "Get Gews",
  })
  @get()
  static getGews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gew",
  })
  @post("{id}")
  static createGew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
