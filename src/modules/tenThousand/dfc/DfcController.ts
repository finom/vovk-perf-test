import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfcs")
export default class DfcController {
  @operation({
    summary: "Get Dfcs",
  })
  @get()
  static getDfcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfc",
  })
  @post("{id}")
  static createDfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
