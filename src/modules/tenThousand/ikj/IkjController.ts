import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikj")
export default class IkjController {
  @operation({
    summary: "Get Ikj",
  })
  @get()
  static getIkj = procedure({
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
