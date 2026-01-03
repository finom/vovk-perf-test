import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvms")
export default class CvmController {
  @operation({
    summary: "Get Cvms",
  })
  @get()
  static getCvms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvm",
  })
  @post("{id}")
  static createCvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
