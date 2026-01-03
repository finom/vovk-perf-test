import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccies")
export default class CcyController {
  @operation({
    summary: "Get Ccies",
  })
  @get()
  static getCcies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccy",
  })
  @post("{id}")
  static createCcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
