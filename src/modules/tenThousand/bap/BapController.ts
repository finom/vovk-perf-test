import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bap")
export default class BapController {
  @operation({
    summary: "Get Bap",
  })
  @get()
  static getBap = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bap",
  })
  @post("{id}")
  static createBap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
