import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvv")
export default class CvvController {
  @operation({
    summary: "Get Cvv",
  })
  @get()
  static getCvv = procedure({
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
