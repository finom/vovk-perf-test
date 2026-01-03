import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfies")
export default class KfyController {
  @operation({
    summary: "Get Kfies",
  })
  @get()
  static getKfies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfy",
  })
  @post("{id}")
  static createKfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
