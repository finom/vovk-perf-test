import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhns")
export default class BhnController {
  @operation({
    summary: "Get Bhns",
  })
  @get()
  static getBhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhn",
  })
  @post("{id}")
  static createBhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
