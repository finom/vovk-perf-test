import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvp")
export default class CvpController {
  @operation({
    summary: "Get Cvp",
  })
  @get()
  static getCvp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvp",
  })
  @post("{id}")
  static createCvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
