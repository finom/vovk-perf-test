import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnws")
export default class BnwController {
  @operation({
    summary: "Get Bnws",
  })
  @get()
  static getBnws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnw",
  })
  @post("{id}")
  static createBnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
