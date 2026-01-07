import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikl")
export default class IklController {
  @operation({
    summary: "Get Ikl",
  })
  @get()
  static getIkl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikl",
  })
  @post("{id}")
  static createIkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
