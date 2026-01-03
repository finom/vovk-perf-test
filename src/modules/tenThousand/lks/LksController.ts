import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lks")
export default class LksController {
  @operation({
    summary: "Get Lks",
  })
  @get()
  static getLks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lks",
  })
  @post("{id}")
  static createLks = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
