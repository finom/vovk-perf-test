import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fads")
export default class FadController {
  @operation({
    summary: "Get Fads",
  })
  @get()
  static getFads = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fad",
  })
  @post("{id}")
  static createFad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
