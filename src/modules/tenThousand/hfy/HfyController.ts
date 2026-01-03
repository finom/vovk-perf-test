import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfies")
export default class HfyController {
  @operation({
    summary: "Get Hfies",
  })
  @get()
  static getHfies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfy",
  })
  @post("{id}")
  static createHfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
