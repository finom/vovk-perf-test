import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvvs")
export default class CvvController {
  @operation({
    summary: "Get Cvvs",
  })
  @get()
  static getCvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvv",
  })
  @post("{id}")
  static createCvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
