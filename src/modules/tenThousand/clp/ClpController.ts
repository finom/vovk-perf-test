import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clps")
export default class ClpController {
  @operation({
    summary: "Get Clps",
  })
  @get()
  static getClps = procedure({
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
