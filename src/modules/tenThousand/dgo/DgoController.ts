import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgo")
export default class DgoController {
  @operation({
    summary: "Get Dgo",
  })
  @get()
  static getDgo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgo",
  })
  @post("{id}")
  static createDgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
