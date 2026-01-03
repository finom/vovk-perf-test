import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvjs")
export default class CvjController {
  @operation({
    summary: "Get Cvjs",
  })
  @get()
  static getCvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvj",
  })
  @post("{id}")
  static createCvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
