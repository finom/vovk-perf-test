import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifr")
export default class IfrController {
  @operation({
    summary: "Get Ifr",
  })
  @get()
  static getIfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifr",
  })
  @post("{id}")
  static createIfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
