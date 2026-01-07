import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbb")
export default class BbbController {
  @operation({
    summary: "Get Bbb",
  })
  @get()
  static getBbb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbb",
  })
  @post("{id}")
  static createBbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
