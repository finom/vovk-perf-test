import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvw")
export default class CvwController {
  @operation({
    summary: "Get Cvw",
  })
  @get()
  static getCvw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvw",
  })
  @post("{id}")
  static createCvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
