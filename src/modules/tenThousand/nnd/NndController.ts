import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnd")
export default class NndController {
  @operation({
    summary: "Get Nnd",
  })
  @get()
  static getNnd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnd",
  })
  @post("{id}")
  static createNnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
