import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvfs")
export default class CvfController {
  @operation({
    summary: "Get Cvfs",
  })
  @get()
  static getCvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvf",
  })
  @post("{id}")
  static createCvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
