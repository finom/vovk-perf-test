import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpi")
export default class FpiController {
  @operation({
    summary: "Get Fpi",
  })
  @get()
  static getFpi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpi",
  })
  @post("{id}")
  static createFpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
