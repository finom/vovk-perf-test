import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvcs")
export default class CvcController {
  @operation({
    summary: "Get Cvcs",
  })
  @get()
  static getCvcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvc",
  })
  @post("{id}")
  static createCvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
