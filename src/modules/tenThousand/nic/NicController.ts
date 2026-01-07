import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nic")
export default class NicController {
  @operation({
    summary: "Get Nic",
  })
  @get()
  static getNic = procedure({
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
