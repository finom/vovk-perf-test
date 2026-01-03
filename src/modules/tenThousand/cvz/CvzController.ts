import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvzs")
export default class CvzController {
  @operation({
    summary: "Get Cvzs",
  })
  @get()
  static getCvzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvz",
  })
  @post("{id}")
  static createCvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
