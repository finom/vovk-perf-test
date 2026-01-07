import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvx")
export default class CvxController {
  @operation({
    summary: "Get Cvx",
  })
  @get()
  static getCvx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvx",
  })
  @post("{id}")
  static createCvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
