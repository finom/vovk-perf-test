import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcies")
export default class DcyController {
  @operation({
    summary: "Get Dcies",
  })
  @get()
  static getDcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcy",
  })
  @post("{id}")
  static createDcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
