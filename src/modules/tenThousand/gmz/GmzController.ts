import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmzs")
export default class GmzController {
  @operation({
    summary: "Get Gmzs",
  })
  @get()
  static getGmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmz",
  })
  @post("{id}")
  static createGmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
