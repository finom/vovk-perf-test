import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juj")
export default class JujController {
  @operation({
    summary: "Get Juj",
  })
  @get()
  static getJuj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juj",
  })
  @post("{id}")
  static createJuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
