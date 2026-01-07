import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbj")
export default class BbjController {
  @operation({
    summary: "Get Bbj",
  })
  @get()
  static getBbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbj",
  })
  @post("{id}")
  static createBbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
