import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndws")
export default class NdwController {
  @operation({
    summary: "Get Ndws",
  })
  @get()
  static getNdws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndw",
  })
  @post("{id}")
  static createNdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
