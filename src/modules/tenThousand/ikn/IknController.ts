import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikn")
export default class IknController {
  @operation({
    summary: "Get Ikn",
  })
  @get()
  static getIkn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikn",
  })
  @post("{id}")
  static createIkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
