import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvk")
export default class CvkController {
  @operation({
    summary: "Get Cvk",
  })
  @get()
  static getCvk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvk",
  })
  @post("{id}")
  static createCvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
