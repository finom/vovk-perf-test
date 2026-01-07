import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dba")
export default class DbaController {
  @operation({
    summary: "Get Dba",
  })
  @get()
  static getDba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dba",
  })
  @post("{id}")
  static createDba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
