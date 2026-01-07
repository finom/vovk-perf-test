import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvh")
export default class CvhController {
  @operation({
    summary: "Get Cvh",
  })
  @get()
  static getCvh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvh",
  })
  @post("{id}")
  static createCvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
