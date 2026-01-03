import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsies")
export default class GsyController {
  @operation({
    summary: "Get Gsies",
  })
  @get()
  static getGsies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsy",
  })
  @post("{id}")
  static createGsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
