import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clg")
export default class ClgController {
  @operation({
    summary: "Get Clg",
  })
  @get()
  static getClg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clg",
  })
  @post("{id}")
  static createClg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
