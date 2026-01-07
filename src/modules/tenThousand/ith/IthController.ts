import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ith")
export default class IthController {
  @operation({
    summary: "Get Ith",
  })
  @get()
  static getIth = procedure({
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
