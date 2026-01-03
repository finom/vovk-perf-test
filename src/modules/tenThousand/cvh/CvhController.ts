import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvhs")
export default class CvhController {
  @operation({
    summary: "Get Cvhs",
  })
  @get()
  static getCvhs = procedure({
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
