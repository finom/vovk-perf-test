import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chl")
export default class ChlController {
  @operation({
    summary: "Get Chl",
  })
  @get()
  static getChl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chl",
  })
  @post("{id}")
  static createChl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
