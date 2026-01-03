import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nches")
export default class NchController {
  @operation({
    summary: "Get Nches",
  })
  @get()
  static getNches = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nch",
  })
  @post("{id}")
  static createNch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
