import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwf")
export default class BwfController {
  @operation({
    summary: "Get Bwf",
  })
  @get()
  static getBwf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwf",
  })
  @post("{id}")
  static createBwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
