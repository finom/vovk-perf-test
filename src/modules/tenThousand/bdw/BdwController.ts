import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdw")
export default class BdwController {
  @operation({
    summary: "Get Bdw",
  })
  @get()
  static getBdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdw",
  })
  @post("{id}")
  static createBdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
