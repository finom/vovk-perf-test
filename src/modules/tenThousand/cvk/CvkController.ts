import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvks")
export default class CvkController {
  @operation({
    summary: "Get Cvks",
  })
  @get()
  static getCvks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvk",
  })
  @post("{id}")
  static createCvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
