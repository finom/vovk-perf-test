import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikd")
export default class IkdController {
  @operation({
    summary: "Get Ikd",
  })
  @get()
  static getIkd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikd",
  })
  @post("{id}")
  static createIkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
