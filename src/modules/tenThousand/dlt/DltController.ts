import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlt")
export default class DltController {
  @operation({
    summary: "Get Dlt",
  })
  @get()
  static getDlt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlt",
  })
  @post("{id}")
  static createDlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
