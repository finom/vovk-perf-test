import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cf")
export default class CfController {
  @operation({
    summary: "Get Cf",
  })
  @get()
  static getCf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cf",
  })
  @post("{id}")
  static createCf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
