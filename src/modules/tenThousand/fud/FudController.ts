import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuds")
export default class FudController {
  @operation({
    summary: "Get Fuds",
  })
  @get()
  static getFuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fud",
  })
  @post("{id}")
  static createFud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
