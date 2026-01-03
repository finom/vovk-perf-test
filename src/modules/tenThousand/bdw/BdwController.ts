import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdws")
export default class BdwController {
  @operation({
    summary: "Get Bdws",
  })
  @get()
  static getBdws = procedure({
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
