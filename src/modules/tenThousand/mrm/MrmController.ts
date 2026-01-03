import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrms")
export default class MrmController {
  @operation({
    summary: "Get Mrms",
  })
  @get()
  static getMrms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrm",
  })
  @post("{id}")
  static createMrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
