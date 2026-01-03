import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndqs")
export default class NdqController {
  @operation({
    summary: "Get Ndqs",
  })
  @get()
  static getNdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndq",
  })
  @post("{id}")
  static createNdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
