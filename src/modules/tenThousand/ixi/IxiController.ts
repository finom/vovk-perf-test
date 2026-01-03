import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixis")
export default class IxiController {
  @operation({
    summary: "Get Ixis",
  })
  @get()
  static getIxis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixi",
  })
  @post("{id}")
  static createIxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
