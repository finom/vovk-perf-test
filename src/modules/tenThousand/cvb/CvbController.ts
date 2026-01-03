import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvbs")
export default class CvbController {
  @operation({
    summary: "Get Cvbs",
  })
  @get()
  static getCvbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvb",
  })
  @post("{id}")
  static createCvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
