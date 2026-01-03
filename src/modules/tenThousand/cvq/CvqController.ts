import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvqs")
export default class CvqController {
  @operation({
    summary: "Get Cvqs",
  })
  @get()
  static getCvqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvq",
  })
  @post("{id}")
  static createCvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
