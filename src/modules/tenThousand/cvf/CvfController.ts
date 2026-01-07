import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvf")
export default class CvfController {
  @operation({
    summary: "Get Cvf",
  })
  @get()
  static getCvf = procedure({
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
