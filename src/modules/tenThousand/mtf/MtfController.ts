import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtfs")
export default class MtfController {
  @operation({
    summary: "Get Mtfs",
  })
  @get()
  static getMtfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtf",
  })
  @post("{id}")
  static createMtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
