import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvts")
export default class CvtController {
  @operation({
    summary: "Get Cvts",
  })
  @get()
  static getCvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvt",
  })
  @post("{id}")
  static createCvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
