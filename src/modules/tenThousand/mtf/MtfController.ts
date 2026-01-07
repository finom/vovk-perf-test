import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtf")
export default class MtfController {
  @operation({
    summary: "Get Mtf",
  })
  @get()
  static getMtf = procedure({
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
