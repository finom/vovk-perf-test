import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpms")
export default class CpmController {
  @operation({
    summary: "Get Cpms",
  })
  @get()
  static getCpms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpm",
  })
  @post("{id}")
  static createCpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
