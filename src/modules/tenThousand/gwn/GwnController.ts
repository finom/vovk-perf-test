import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwn")
export default class GwnController {
  @operation({
    summary: "Get Gwn",
  })
  @get()
  static getGwn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwn",
  })
  @post("{id}")
  static createGwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
