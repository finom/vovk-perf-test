import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncws")
export default class NcwController {
  @operation({
    summary: "Get Ncws",
  })
  @get()
  static getNcws = procedure({
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
