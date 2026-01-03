import { procedure, prefix, get, post, operation } from "vovk";

@prefix("givs")
export default class GivController {
  @operation({
    summary: "Get Givs",
  })
  @get()
  static getGivs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Giv",
  })
  @post("{id}")
  static createGiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
