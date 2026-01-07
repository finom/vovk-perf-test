import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcl")
export default class FclController {
  @operation({
    summary: "Get Fcl",
  })
  @get()
  static getFcl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcl",
  })
  @post("{id}")
  static createFcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
