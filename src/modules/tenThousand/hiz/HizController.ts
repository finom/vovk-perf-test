import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hizs")
export default class HizController {
  @operation({
    summary: "Get Hizs",
  })
  @get()
  static getHizs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hiz",
  })
  @post("{id}")
  static createHiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
