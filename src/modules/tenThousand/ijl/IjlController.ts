import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijl")
export default class IjlController {
  @operation({
    summary: "Get Ijl",
  })
  @get()
  static getIjl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijl",
  })
  @post("{id}")
  static createIjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
