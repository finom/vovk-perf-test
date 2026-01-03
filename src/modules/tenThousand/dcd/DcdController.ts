import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcds")
export default class DcdController {
  @operation({
    summary: "Get Dcds",
  })
  @get()
  static getDcds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcd",
  })
  @post("{id}")
  static createDcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
