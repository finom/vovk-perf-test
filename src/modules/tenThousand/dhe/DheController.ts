import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhe")
export default class DheController {
  @operation({
    summary: "Get Dhe",
  })
  @get()
  static getDhe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhe",
  })
  @post("{id}")
  static createDhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
