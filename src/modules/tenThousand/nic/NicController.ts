import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nics")
export default class NicController {
  @operation({
    summary: "Get Nics",
  })
  @get()
  static getNics = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nic",
  })
  @post("{id}")
  static createNic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
