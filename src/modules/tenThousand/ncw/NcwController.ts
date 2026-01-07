import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncw")
export default class NcwController {
  @operation({
    summary: "Get Ncw",
  })
  @get()
  static getNcw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncw",
  })
  @post("{id}")
  static createNcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
