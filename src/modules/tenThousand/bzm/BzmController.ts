import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzms")
export default class BzmController {
  @operation({
    summary: "Get Bzms",
  })
  @get()
  static getBzms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzm",
  })
  @post("{id}")
  static createBzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
