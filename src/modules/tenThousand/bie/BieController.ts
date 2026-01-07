import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bie")
export default class BieController {
  @operation({
    summary: "Get Bie",
  })
  @get()
  static getBie = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bie",
  })
  @post("{id}")
  static createBie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
