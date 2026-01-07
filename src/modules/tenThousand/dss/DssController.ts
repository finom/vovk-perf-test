import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dss")
export default class DssController {
  @operation({
    summary: "Get Dss",
  })
  @get()
  static getDss = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dss",
  })
  @post("{id}")
  static createDss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
