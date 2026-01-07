import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azm")
export default class AzmController {
  @operation({
    summary: "Get Azm",
  })
  @get()
  static getAzm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azm",
  })
  @post("{id}")
  static createAzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
