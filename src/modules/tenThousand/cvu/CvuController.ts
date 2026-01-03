import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvus")
export default class CvuController {
  @operation({
    summary: "Get Cvus",
  })
  @get()
  static getCvus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvu",
  })
  @post("{id}")
  static createCvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
