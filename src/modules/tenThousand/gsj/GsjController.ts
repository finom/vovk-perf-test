import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsjs")
export default class GsjController {
  @operation({
    summary: "Get Gsjs",
  })
  @get()
  static getGsjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsj",
  })
  @post("{id}")
  static createGsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
