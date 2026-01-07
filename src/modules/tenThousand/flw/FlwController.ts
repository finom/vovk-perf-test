import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flw")
export default class FlwController {
  @operation({
    summary: "Get Flw",
  })
  @get()
  static getFlw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flw",
  })
  @post("{id}")
  static createFlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
