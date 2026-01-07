import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfy")
export default class CfyController {
  @operation({
    summary: "Get Cfy",
  })
  @get()
  static getCfy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfy",
  })
  @post("{id}")
  static createCfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
