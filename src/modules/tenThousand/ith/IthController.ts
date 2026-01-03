import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iths")
export default class IthController {
  @operation({
    summary: "Get Iths",
  })
  @get()
  static getIths = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ith",
  })
  @post("{id}")
  static createIth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
