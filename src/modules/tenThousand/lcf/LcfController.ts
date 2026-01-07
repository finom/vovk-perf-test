import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcf")
export default class LcfController {
  @operation({
    summary: "Get Lcf",
  })
  @get()
  static getLcf = procedure({
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
