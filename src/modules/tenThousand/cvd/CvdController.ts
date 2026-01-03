import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvds")
export default class CvdController {
  @operation({
    summary: "Get Cvds",
  })
  @get()
  static getCvds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvd",
  })
  @post("{id}")
  static createCvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
