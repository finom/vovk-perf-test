import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdq")
export default class BdqController {
  @operation({
    summary: "Get Bdq",
  })
  @get()
  static getBdq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdq",
  })
  @post("{id}")
  static createBdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
