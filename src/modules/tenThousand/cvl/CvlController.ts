import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvl")
export default class CvlController {
  @operation({
    summary: "Get Cvl",
  })
  @get()
  static getCvl = procedure({
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
