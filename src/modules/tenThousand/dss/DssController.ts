import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsses")
export default class DssController {
  @operation({
    summary: "Get Dsses",
  })
  @get()
  static getDsses = procedure({
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
