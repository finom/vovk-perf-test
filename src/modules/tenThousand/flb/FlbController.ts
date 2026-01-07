import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flb")
export default class FlbController {
  @operation({
    summary: "Get Flb",
  })
  @get()
  static getFlb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flb",
  })
  @post("{id}")
  static createFlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
