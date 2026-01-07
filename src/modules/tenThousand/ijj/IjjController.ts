import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijj")
export default class IjjController {
  @operation({
    summary: "Get Ijj",
  })
  @get()
  static getIjj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijj",
  })
  @post("{id}")
  static createIjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
