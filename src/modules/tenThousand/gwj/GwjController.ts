import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwj")
export default class GwjController {
  @operation({
    summary: "Get Gwj",
  })
  @get()
  static getGwj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwj",
  })
  @post("{id}")
  static createGwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
