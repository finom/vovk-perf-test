import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfies")
export default class DfyController {
  @operation({
    summary: "Get Dfies",
  })
  @get()
  static getDfies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfy",
  })
  @post("{id}")
  static createDfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
