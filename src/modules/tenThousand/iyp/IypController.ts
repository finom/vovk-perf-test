import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyp")
export default class IypController {
  @operation({
    summary: "Get Iyp",
  })
  @get()
  static getIyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyp",
  })
  @post("{id}")
  static createIyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
