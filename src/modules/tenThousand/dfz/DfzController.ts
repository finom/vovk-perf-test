import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfzs")
export default class DfzController {
  @operation({
    summary: "Get Dfzs",
  })
  @get()
  static getDfzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfz",
  })
  @post("{id}")
  static createDfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
