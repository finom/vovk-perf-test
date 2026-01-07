import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nd")
export default class NdController {
  @operation({
    summary: "Get Nd",
  })
  @get()
  static getNd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nd",
  })
  @post("{id}")
  static createNd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
