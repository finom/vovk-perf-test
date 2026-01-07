import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibt")
export default class IbtController {
  @operation({
    summary: "Get Ibt",
  })
  @get()
  static getIbt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibt",
  })
  @post("{id}")
  static createIbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
