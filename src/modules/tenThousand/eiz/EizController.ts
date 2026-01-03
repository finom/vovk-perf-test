import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eizs")
export default class EizController {
  @operation({
    summary: "Get Eizs",
  })
  @get()
  static getEizs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eiz",
  })
  @post("{id}")
  static createEiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
