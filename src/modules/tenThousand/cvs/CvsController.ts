import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvs")
export default class CvsController {
  @operation({
    summary: "Get Cvs",
  })
  @get()
  static getCvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvs",
  })
  @post("{id}")
  static createCvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
