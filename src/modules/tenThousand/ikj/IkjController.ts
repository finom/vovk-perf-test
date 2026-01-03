import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikjs")
export default class IkjController {
  @operation({
    summary: "Get Ikjs",
  })
  @get()
  static getIkjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikj",
  })
  @post("{id}")
  static createIkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
