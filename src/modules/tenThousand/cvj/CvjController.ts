import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvj")
export default class CvjController {
  @operation({
    summary: "Get Cvj",
  })
  @get()
  static getCvj = procedure({
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
