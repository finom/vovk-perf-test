import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrm")
export default class MrmController {
  @operation({
    summary: "Get Mrm",
  })
  @get()
  static getMrm = procedure({
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
