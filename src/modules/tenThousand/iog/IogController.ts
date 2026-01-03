import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iogs")
export default class IogController {
  @operation({
    summary: "Get Iogs",
  })
  @get()
  static getIogs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iog",
  })
  @post("{id}")
  static createIog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
