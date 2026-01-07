import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnb")
export default class BnbController {
  @operation({
    summary: "Get Bnb",
  })
  @get()
  static getBnb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnb",
  })
  @post("{id}")
  static createBnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
