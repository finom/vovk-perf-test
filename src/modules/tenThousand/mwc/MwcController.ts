import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwc")
export default class MwcController {
  @operation({
    summary: "Get Mwc",
  })
  @get()
  static getMwc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwc",
  })
  @post("{id}")
  static createMwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
