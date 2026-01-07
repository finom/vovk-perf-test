import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbz")
export default class BbzController {
  @operation({
    summary: "Get Bbz",
  })
  @get()
  static getBbz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbz",
  })
  @post("{id}")
  static createBbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
