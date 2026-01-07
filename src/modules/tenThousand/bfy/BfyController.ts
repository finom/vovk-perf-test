import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfy")
export default class BfyController {
  @operation({
    summary: "Get Bfy",
  })
  @get()
  static getBfy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfy",
  })
  @post("{id}")
  static createBfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
