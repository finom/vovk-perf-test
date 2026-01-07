import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myg")
export default class MygController {
  @operation({
    summary: "Get Myg",
  })
  @get()
  static getMyg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myg",
  })
  @post("{id}")
  static createMyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
