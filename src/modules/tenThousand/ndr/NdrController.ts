import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndrs")
export default class NdrController {
  @operation({
    summary: "Get Ndrs",
  })
  @get()
  static getNdrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndr",
  })
  @post("{id}")
  static createNdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
