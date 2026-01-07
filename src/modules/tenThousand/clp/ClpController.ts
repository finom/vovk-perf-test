import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clp")
export default class ClpController {
  @operation({
    summary: "Get Clp",
  })
  @get()
  static getClp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clp",
  })
  @post("{id}")
  static createClp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
