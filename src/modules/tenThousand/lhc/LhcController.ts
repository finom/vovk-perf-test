import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhc")
export default class LhcController {
  @operation({
    summary: "Get Lhc",
  })
  @get()
  static getLhc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhc",
  })
  @post("{id}")
  static createLhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
