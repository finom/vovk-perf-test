import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwf")
export default class MwfController {
  @operation({
    summary: "Get Mwf",
  })
  @get()
  static getMwf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwf",
  })
  @post("{id}")
  static createMwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
