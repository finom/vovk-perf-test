import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkp")
export default class NkpController {
  @operation({
    summary: "Get Nkp",
  })
  @get()
  static getNkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkp",
  })
  @post("{id}")
  static createNkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
