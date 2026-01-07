import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvr")
export default class CvrController {
  @operation({
    summary: "Get Cvr",
  })
  @get()
  static getCvr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvr",
  })
  @post("{id}")
  static createCvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
