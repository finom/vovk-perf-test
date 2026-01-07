import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frn")
export default class FrnController {
  @operation({
    summary: "Get Frn",
  })
  @get()
  static getFrn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frn",
  })
  @post("{id}")
  static createFrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
