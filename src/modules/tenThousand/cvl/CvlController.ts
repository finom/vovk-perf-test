import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvls")
export default class CvlController {
  @operation({
    summary: "Get Cvls",
  })
  @get()
  static getCvls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvl",
  })
  @post("{id}")
  static createCvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
