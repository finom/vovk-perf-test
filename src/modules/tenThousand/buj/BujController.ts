import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buj")
export default class BujController {
  @operation({
    summary: "Get Buj",
  })
  @get()
  static getBuj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buj",
  })
  @post("{id}")
  static createBuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
