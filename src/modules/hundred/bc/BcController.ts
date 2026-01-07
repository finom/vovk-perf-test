import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bc")
export default class BcController {
  @operation({
    summary: "Get Bc",
  })
  @get()
  static getBc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bc",
  })
  @post("{id}")
  static createBc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
