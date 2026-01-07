import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvb")
export default class CvbController {
  @operation({
    summary: "Get Cvb",
  })
  @get()
  static getCvb = procedure({
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
