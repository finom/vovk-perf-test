import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbfs")
export default class BbfController {
  @operation({
    summary: "Get Bbfs",
  })
  @get()
  static getBbfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbf",
  })
  @post("{id}")
  static createBbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
