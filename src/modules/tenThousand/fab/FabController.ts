import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fab")
export default class FabController {
  @operation({
    summary: "Get Fab",
  })
  @get()
  static getFab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fab",
  })
  @post("{id}")
  static createFab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
