import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvns")
export default class CvnController {
  @operation({
    summary: "Get Cvns",
  })
  @get()
  static getCvns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvn",
  })
  @post("{id}")
  static createCvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
