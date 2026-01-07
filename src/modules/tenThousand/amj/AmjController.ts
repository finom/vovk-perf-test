import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amj")
export default class AmjController {
  @operation({
    summary: "Get Amj",
  })
  @get()
  static getAmj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amj",
  })
  @post("{id}")
  static createAmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
