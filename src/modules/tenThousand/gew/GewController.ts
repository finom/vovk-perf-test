import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gew")
export default class GewController {
  @operation({
    summary: "Get Gew",
  })
  @get()
  static getGew = procedure({
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
