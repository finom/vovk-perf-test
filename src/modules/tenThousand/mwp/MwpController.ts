import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwp")
export default class MwpController {
  @operation({
    summary: "Get Mwp",
  })
  @get()
  static getMwp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwp",
  })
  @post("{id}")
  static createMwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
