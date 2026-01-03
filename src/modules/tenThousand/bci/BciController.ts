import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcis")
export default class BciController {
  @operation({
    summary: "Get Bcis",
  })
  @get()
  static getBcis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bci",
  })
  @post("{id}")
  static createBci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
