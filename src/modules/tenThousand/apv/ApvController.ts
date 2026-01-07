import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apv")
export default class ApvController {
  @operation({
    summary: "Get Apv",
  })
  @get()
  static getApv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apv",
  })
  @post("{id}")
  static createApv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
