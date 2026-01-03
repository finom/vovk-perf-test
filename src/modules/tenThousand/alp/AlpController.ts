import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alps")
export default class AlpController {
  @operation({
    summary: "Get Alps",
  })
  @get()
  static getAlps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alp",
  })
  @post("{id}")
  static createAlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
