import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itw")
export default class ItwController {
  @operation({
    summary: "Get Itw",
  })
  @get()
  static getItw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itw",
  })
  @post("{id}")
  static createItw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
