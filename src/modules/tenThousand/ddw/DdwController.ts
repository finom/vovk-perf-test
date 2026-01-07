import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddw")
export default class DdwController {
  @operation({
    summary: "Get Ddw",
  })
  @get()
  static getDdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddw",
  })
  @post("{id}")
  static createDdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
