import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndhs")
export default class NdhController {
  @operation({
    summary: "Get Ndhs",
  })
  @get()
  static getNdhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndh",
  })
  @post("{id}")
  static createNdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
