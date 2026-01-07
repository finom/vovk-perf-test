import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncb")
export default class NcbController {
  @operation({
    summary: "Get Ncb",
  })
  @get()
  static getNcb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncb",
  })
  @post("{id}")
  static createNcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
