import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezies")
export default class EzyController {
  @operation({
    summary: "Get Ezies",
  })
  @get()
  static getEzies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezy",
  })
  @post("{id}")
  static createEzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
