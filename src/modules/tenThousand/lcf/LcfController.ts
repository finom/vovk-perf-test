import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcfs")
export default class LcfController {
  @operation({
    summary: "Get Lcfs",
  })
  @get()
  static getLcfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcf",
  })
  @post("{id}")
  static createLcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
