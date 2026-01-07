import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvt")
export default class CvtController {
  @operation({
    summary: "Get Cvt",
  })
  @get()
  static getCvt = procedure({
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
