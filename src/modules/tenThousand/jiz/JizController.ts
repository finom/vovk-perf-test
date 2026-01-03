import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jizs")
export default class JizController {
  @operation({
    summary: "Get Jizs",
  })
  @get()
  static getJizs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jiz",
  })
  @post("{id}")
  static createJiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
