import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezl")
export default class EzlController {
  @operation({
    summary: "Get Ezl",
  })
  @get()
  static getEzl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezl",
  })
  @post("{id}")
  static createEzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
