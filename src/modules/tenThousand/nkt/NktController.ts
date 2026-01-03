import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkts")
export default class NktController {
  @operation({
    summary: "Get Nkts",
  })
  @get()
  static getNkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkt",
  })
  @post("{id}")
  static createNkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
