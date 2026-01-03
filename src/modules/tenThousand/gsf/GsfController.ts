import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsfs")
export default class GsfController {
  @operation({
    summary: "Get Gsfs",
  })
  @get()
  static getGsfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsf",
  })
  @post("{id}")
  static createGsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
