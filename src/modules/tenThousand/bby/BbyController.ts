import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbies")
export default class BbyController {
  @operation({
    summary: "Get Bbies",
  })
  @get()
  static getBbies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bby",
  })
  @post("{id}")
  static createBby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
