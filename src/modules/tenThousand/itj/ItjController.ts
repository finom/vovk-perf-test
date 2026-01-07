import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itj")
export default class ItjController {
  @operation({
    summary: "Get Itj",
  })
  @get()
  static getItj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itj",
  })
  @post("{id}")
  static createItj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
