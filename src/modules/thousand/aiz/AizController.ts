import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aizs")
export default class AizController {
  @operation({
    summary: "Get Aizs",
  })
  @get()
  static getAizs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aiz",
  })
  @post("{id}")
  static createAiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
