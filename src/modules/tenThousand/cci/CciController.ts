import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cci")
export default class CciController {
  @operation({
    summary: "Get Cci",
  })
  @get()
  static getCci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cci",
  })
  @post("{id}")
  static createCci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
