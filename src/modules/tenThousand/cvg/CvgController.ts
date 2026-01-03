import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvgs")
export default class CvgController {
  @operation({
    summary: "Get Cvgs",
  })
  @get()
  static getCvgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvg",
  })
  @post("{id}")
  static createCvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
