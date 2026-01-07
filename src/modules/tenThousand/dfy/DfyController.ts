import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfy")
export default class DfyController {
  @operation({
    summary: "Get Dfy",
  })
  @get()
  static getDfy = procedure({
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
