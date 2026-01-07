import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyv")
export default class IyvController {
  @operation({
    summary: "Get Iyv",
  })
  @get()
  static getIyv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyv",
  })
  @post("{id}")
  static createIyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
