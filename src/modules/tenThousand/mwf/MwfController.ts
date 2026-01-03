import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwfs")
export default class MwfController {
  @operation({
    summary: "Get Mwfs",
  })
  @get()
  static getMwfs = procedure({
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
