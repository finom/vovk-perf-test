import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcs")
export default class FcsController {
  @operation({
    summary: "Get Fcs",
  })
  @get()
  static getFcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcs",
  })
  @post("{id}")
  static createFcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
